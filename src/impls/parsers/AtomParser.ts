import { Parser } from '../..'
import { TokenWalker } from '../../classes'
import {
  Expression,
  ParserToken,
  FunctionExpression,
  Identifier,
  FunctionParameter,
  BlockStatement,
  ObjectLiteral,
  ObjectProperty,
} from '../../types'
import { injectable } from 'inversify'
import { injectParser } from './parserContainer'
import { IParser } from '../../interfaces'
import { loop } from '../../utils'

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

    if (token.kind === 'left_brace') {
      return this.parseObjectLiteral(walker)
    }

    throw this.createUnexpectedError(token, walker, 'expression')
  }

  /**
   * Parse object litera.
   *
   * @param walker Token walker.
   */
  protected parseObjectLiteral(walker: TokenWalker): ObjectLiteral {
    const properties: ObjectProperty[] = []
    const leftBrace = walker.value()

    if (!leftBrace) {
      throw this.createPeekError(walker)
    }

    if (leftBrace.kind !== 'left_brace') {
      throw this.createUnexpectedError(leftBrace, walker, '{')
    }

    let token = this.forwardToPrimaryToken(walker)

    if (token && token.kind === 'right_brace') {
      walker.next()

      return {
        kind: 'object_literal',
        properties,
        loc: leftBrace.loc.merge(token.loc),
      }
    }

    loop(({ end }) => {
      const identifierToken = walker.next()
      if (!identifierToken) {
        throw this.createPeekError(walker)
      }

      if (identifierToken.kind !== 'identifier') {
        throw this.createUnexpectedError(identifierToken, walker, 'identifier')
      }
      const identifier: Identifier = {
        ...identifierToken,
      }

      const colonToken = walker.next()
      if (!colonToken) {
        throw this.createPeekError(walker)
      }

      if (colonToken.kind !== 'colon') {
        throw this.createUnexpectedError(colonToken, walker, ':')
      }

      const initializer = this.expressions.parse(walker)

      properties.push({
        identifier,
        initializer,
      })

      token = this.forwardToPrimaryToken(walker)

      if (!token || token.kind !== 'comma') {
        return end()
      }
      walker.next()
      this.forwardToPrimaryToken(walker)
    })

    if (!token) {
      throw this.createPeekError(walker)
    }

    if (token.kind !== 'right_brace') {
      throw this.createUnexpectedError(token, walker, '}')
    }

    walker.next()

    return {
      kind: 'object_literal',
      properties,
      loc: leftBrace.loc,
    }
  }

  /**
   * Parse function expression.
   *
   * @param walker Token walker.
   */
  protected parseFunction(walker: TokenWalker): FunctionExpression {
    const fn = walker.value()
    let identifier: Identifier | undefined
    let parameters: FunctionParameter[] = []

    if (fn.kind !== 'fn') {
      throw this.createUnexpectedError(fn, walker, 'fn')
    }

    let peek = walker.peek()

    if (!peek) {
      throw this.createPeekError(walker)
    }

    if (peek.kind === 'identifier') {
      /**
       * fn <identifier> {}
       * fn <identifier> (<parameter>...) {}
       */
      walker.next()
      identifier = peek

      peek = walker.peek()

      if (!peek) {
        throw this.createPeekError(walker)
      }

      if (peek.kind === 'left_paren') {
        walker.next()
        parameters = this.parseFunctionParameters(walker)
      }
    } else if (peek.kind === 'left_brace') {
      /**
       * fn {}
       */
    } else if (peek.kind === 'left_paren') {
      /**
       * fn (<parameter>...) {}
       */
      walker.next()

      parameters = this.parseFunctionParameters(walker)
    } else {
      throw this.createUnexpectedError(peek, walker, 'identifier or { or (')
    }

    const statement = this.blockStatement.parse(walker)

    return {
      kind: 'function_expression',
      identifier,
      parameters,
      body: statement,
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

    let token = walker.peek()

    if (token && token.kind === 'right_paren') {
      walker.next()
      return parameters
    }

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
