import { ITranspiler } from '../..'
import { Node, Program, Statement, Expression, Token } from '../../types'
import { loop } from '../../utils'

/**
 * JsTranspiler class.
 */
export class JsTranspiler implements ITranspiler {
  /**
   * Statement suffix.
   */
  statementSuffix = ';'

  /**
   * Space char.
   */
  space = ''

  /**
   * Block statement new line char.
   */
  blockNewLine = ''

  transpile(node: Node): string {
    return this.node(node)
  }

  /**
   * Convert ast node to javascript string.
   *
   * @param node AST node.
   */
  protected node(node: Node): string {
    if (node.kind === 'program') {
      return this.program(node)
    }
  }

  /**
   * Convert program.
   *
   * @param program Program node.
   */
  protected program(program: Program): string {
    let js = ''

    for (const statement of program.statements) {
      js += this.statement(statement) + this.statementSuffix
    }

    return js
  }

  /**
   * Convert statement.
   *
   * @param statement Statement node.
   */
  protected statement(statement: Statement, lastExpressionSuffix = ''): string {
    if (statement.kind === 'expression_statement') {
      return this.expression(statement.expression)
    }

    if (statement.kind === 'block_statement') {
      let body = ''
      const lastStatement = statement.body[statement.body.length - 1]

      for (const subStatement of statement.body) {
        if (
          subStatement === lastStatement &&
          subStatement.kind === 'expression_statement'
        ) {
          body += lastExpressionSuffix + this.statement(subStatement)
        } else {
          body += this.statement(subStatement, lastExpressionSuffix)
        }
        body += this.statementSuffix
      }

      return `{${this.blockNewLine}${body}}`
    }

    if (statement.kind === 'break_statement') {
      return 'break'
    }

    if (statement.kind === 'return_statement') {
      if (statement.expression) {
        return this.joinWithSpace(
          'return ',
          this.expression(statement.expression)
        )
      }

      return 'return'
    }

    if (statement.kind === 'const_statement') {
      const identifier = this.expression(statement.identifier)
      const initializer = this.expression(statement.initializer)

      return this.joinWithSpace(`const ${identifier}`, '=', initializer)
    }

    if (statement.kind === 'let_statement') {
      const identifier = this.expression(statement.identifier)

      if (statement.initializer) {
        const initializer = this.expression(statement.initializer)

        return this.joinWithSpace(`let ${identifier}`, '=', initializer)
      }

      return `let ${identifier}`
    }

    if (statement.kind === 'continue_statement') {
      return 'continue'
    }

    if (statement.kind === 'while_statement') {
      const condition = this.expression(statement.condition)
      const body = this.statement(statement.body)

      return this.joinWithSpace(`while (${condition})`, body)
    }

    if (statement.kind === 'incase_statement') {
      const condition = this.expression(statement.condition)
      const thenStatement = this.statement(statement.then, lastExpressionSuffix)
      let elseStatement = ''

      if (statement.else) {
        let elseNode = statement.else

        loop(({ end }) => {
          if (elseNode.kind === 'incase_statement') {
            const condition = this.expression(elseNode.condition)
            const body = this.statement(elseNode.then)

            elseStatement += this.joinWithSpace(
              'else if',
              `(${condition})`,
              body
            )
            elseNode = elseNode.else
          } else {
            const body = this.statement(elseNode, lastExpressionSuffix)

            elseStatement += `else ${body}`

            return end()
          }
        })
      }

      return this.joinWithSpace(
        'if ',
        `(${condition})`,
        thenStatement,
        elseStatement
      )
    }
  }

  /**
   * Convert expression.
   *
   * @param expression Expression node.
   */
  protected expression(expression: Expression): string {
    if (expression.kind === 'binary_expression') {
      const left = this.expression(expression.left)
      const right = this.expression(expression.right)

      if (expression.operator.kind === 'minus_greater_than') {
        return `${right}(${left})`
      }

      const operator = this.tokenToSymbol(expression.operator)

      return `(${this.joinWithSpace(left, operator, right)})`
    }

    if (expression.kind === 'boolean_literal') {
      return expression.value ? 'true' : 'false'
    }

    if (expression.kind === 'call_expression') {
      const left = this.expression(expression.expression)
      const args = expression.arguments
        .map((arg) => this.expression(arg))
        .join(`,${this.space}`)

      return `${left}(${args})`
    }

    if (expression.kind === 'function_expression') {
      const params = expression.parameters
        .map((param) => this.expression(param.identifier))
        .join(`,${this.space}`)
      const body = this.statement(expression.body, 'return ')

      if (expression.identifier) {
        const identifier = this.expression(expression.identifier)
        return `function ${identifier}(${params})${this.space}${body}`
      }

      return `function (${params})${this.space}${body}`
    }

    if (expression.kind === 'identifier') {
      return expression.identifier
    }

    if (expression.kind === 'numeric_literal') {
      return expression.value.toString()
    }

    if (expression.kind === 'string_literal') {
      return `"${expression.value}"`
    }

    if (expression.kind === 'if_expression') {
      const condition = this.expression(expression.condition)
      const thenStatement = this.statement(expression.then, `return `)
      let elseStatement = ''

      if (expression.else) {
        let elseNode = expression.else

        loop(({ end }) => {
          if (elseNode.kind === 'if_expression') {
            const condition = this.expression(elseNode.condition)
            const body = this.statement(elseNode.then)

            elseStatement += this.joinWithSpace(
              'else if',
              `(${condition})`,
              body
            )
            elseNode = elseNode.else
          } else {
            const body = this.statement(elseNode, 'return ')

            elseStatement += `else ${body}`

            return end()
          }
        })
      }

      return this.joinWithSpace(
        '(()',
        '=>',
        `{${this.blockNewLine}{`,
        'if',
        `(${condition})`,
        thenStatement,
        elseStatement,
        '}})()'
      )
    }

    if (expression.kind === 'property_access_expression') {
      const left = this.expression(expression.expression)
      const identifier = this.expression(expression.identifier)

      return `${left}.${identifier}`
    }

    if (expression.kind === 'prefix_expression') {
      const operator = this.tokenToSymbol(expression.operator)
      const right = this.expression(expression.right)

      return `${operator}${right}`
    }

    if (expression.kind === 'object_literal') {
      const properties = expression.properties
        .map(
          ({ identifier, initializer }) =>
            `${this.expression(identifier)}:${this.space}${this.expression(
              initializer
            )}`
        )
        .join(`,${this.space}`)

      return `{${properties}}`
    }

    if (expression.kind === 'array_literal') {
      const elements = expression.elements
        .map((e) => this.expression(e))
        .join(`,${this.space}`)

      return `[${elements}]`
    }

    if (expression.kind === 'element_access_expression') {
      const left = this.expression(expression.expression)
      const index = this.expression(expression.index)

      return `${left}[${index}]`
    }
  }

  /**
   * Join given string array with space.
   *
   * @param items String array.
   */
  protected joinWithSpace(...items: string[]): string {
    return items.join(this.space)
  }

  /**
   * Convert token to symbol string.
   *
   * @param token Token.
   */
  protected tokenToSymbol(token: Token): string {
    const kind = token.kind

    if (kind === 'equals_equals') {
      return '=='
    }

    if (kind === 'exclamation_equals') {
      return '!='
    }

    if (kind === 'greater_than') {
      return '>'
    }

    if (kind === 'greater_equals_than') {
      return '>='
    }

    if (kind === 'less_than') {
      return '<'
    }

    if (kind === 'less_equals_than') {
      return '<='
    }

    if (kind === 'and_and') {
      return '&&'
    }

    if (kind === 'bar_bar') {
      return '||'
    }

    if (kind === 'exclamation') {
      return '!'
    }

    if (kind === 'plus') {
      return '+'
    }

    if (kind === 'plus_plus') {
      return '++'
    }

    if (kind === 'minus') {
      return '-'
    }

    if (kind === 'minus_minus') {
      return '--'
    }

    if (kind === 'asterisk') {
      return '*'
    }

    if (kind === 'asterisk_asterisk') {
      return '**'
    }

    if (kind === 'slash') {
      return '/'
    }

    if (kind === 'percent') {
      return '%'
    }

    if (kind === 'equals') {
      return '='
    }

    if (kind === 'plus_equals') {
      return '+='
    }

    if (kind === 'minus_equals') {
      return '-='
    }

    if (kind === 'asterisk_equals') {
      return '*='
    }

    if (kind === 'asterisk_asterisk_equals') {
      return '*=='
    }

    if (kind === 'slash_equals') {
      return '/='
    }

    if (kind === 'percent_equals') {
      return '%='
    }

    if (kind === 'comma') {
      return ','
    }

    if (kind === 'colon') {
      return ':'
    }

    if (kind === 'question') {
      return '?'
    }

    return ''
  }
}
