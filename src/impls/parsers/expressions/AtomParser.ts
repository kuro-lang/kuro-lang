import { Parser } from '../../..'
import { TokenWalker } from '../../../classes'
import {
  Expression,
  ParserToken,
  FunctionExpression,
  Identifier,
  FunctionParameter,
  BlockStatement,
} from '../../../types'
import { injectable } from 'inversify'
import { injectParser } from '../parserContainer'
import { IParser } from '../../../interfaces'
import { loop } from '../../../utils'

/**
 * AtomParser class.
 */
@injectable()
export class AtomParser extends Parser<Expression> {
  /**
   * ExpressionsParser.
   */
  @injectParser(ParserToken.Expressions) expressions: IParser<Expression>

  /**
   * StatementsParser.
   */
  @injectParser(ParserToken.Statements) blockStatement: IParser<BlockStatement>

  parse(walker: TokenWalker): Expression {
    const token = walker.next()

    if (!token) {
      throw this.createPeekError(walker)
    }

    if (
      token.kind === 'boolean_literal' ||
      token.kind === 'numeric_literal' ||
      token.kind === 'string_literal'
    ) {
      return token
    }

    if (token.kind === 'identifier') {
      return token
    }

    if (token.kind === 'fn') {
      return this.parseFunction(walker)
    }

    throw this.createUnexpectedError(token, walker)
  }

  /**
   * Parse function expression.
   *
   * @param walker Token walker.
   */
  protected parseFunction(walker: TokenWalker): FunctionExpression {
    const fn = walker.value()
    let identifier: Identifier | undefined
    let parameters: FunctionParameter[]
    let statement: BlockStatement

    if (fn.kind !== 'fn') {
      throw this.createUnexpectedError(fn, walker, 'fn')
    }

    const next = walker.next()

    if (!next) {
      throw this.createPeekError(walker)
    }

    if (next.kind === 'identifier') {
      // fn <identifier> () {}
      identifier = next

      const peek = walker.peek()

      if (!peek) {
        throw this.createPeekError(walker)
      }

      if (peek.kind === 'left_paren') {
        // fn <identifier> {}
        walker.next()
        parameters = this.parseFunctionParameters(walker)
      }

      statement = this.blockStatement.parse(walker)
    } else if (next.kind === 'left_paren') {
      // fn () {}
      const peek = walker.peek()

      if (!peek) {
        throw this.createPeekError(walker)
      }

      if (peek.kind === 'left_paren') {
        // fn {}
        walker.next()
        parameters = this.parseFunctionParameters(walker)
      }

      statement = this.blockStatement.parse(walker)
    }

    return {
      kind: 'function_expression',
      identifier,
      parameters,
      statement,
      loc: fn.loc.merge(statement.loc),
    }
  }

  /**
   * Parse function parameters.
   *
   * @param walker Token walker.
   */
  protected parseFunctionParameters(walker: TokenWalker): FunctionParameter[] {
    const leftParen = walker.value()
    const parameters: FunctionParameter[] = []

    if (leftParen.kind !== 'left_paren') {
      throw this.createUnexpectedError(leftParen, walker, '(')
    }

    let token: ReturnType<typeof walker.next>
    do {
      const parameter = walker.next()

      if (!parameter) {
        throw this.createPeekError(walker)
      }

      if (parameter.kind !== 'identifier') {
        throw this.createUnexpectedError(parameter, walker, 'identifier')
      }

      parameters.push({ identifier: { ...parameter } })

      token = walker.next()
    } while (token && token.kind === 'comma')

    if (!token) {
      throw this.createPeekError(walker)
    }

    if (token.kind !== 'right_paren') {
      throw this.createUnexpectedError(token, walker, ')')
    }

    return parameters
  }
}
