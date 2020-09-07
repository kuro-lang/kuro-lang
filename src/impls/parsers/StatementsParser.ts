import { Parser, Expression } from '../..'
import { injectable } from 'inversify'
import { injectParser } from './parserContainer'
import { ParserToken, Statement, Identifier, BlockStatement } from '../../types'
import { IParser } from '../../interfaces'
import { TokenWalker } from '../../classes'

/**
 * StatementsParser class.
 */
@injectable()
export class StatementsParser extends Parser<Statement> {
  /**
   * ExpressionsParser.
   */
  @injectParser(ParserToken.Expressions) expressions: IParser<Expression>

  /**
   * BlockParser.
   */
  @injectParser(ParserToken.Block) block: IParser<BlockStatement>

  parse(walker: TokenWalker): Statement {
    const peek = this.forwardToPrimaryToken(walker)

    if (!peek) {
      throw this.createPeekError(walker)
    }

    if (peek.kind === 'break') {
      const next = walker.next()

      if (!next || next.kind === 'semi_colon' || next.kind === 'new_line') {
        return {
          kind: 'break_statement',
          loc: peek.loc,
        }
      }

      const expression = this.expressions.parse(walker)
      this.forwardToPrimaryToken(walker)

      return {
        kind: 'break_statement',
        loc: peek.loc.merge(expression.loc),
      }
    }

    if (peek.kind === 'return') {
      const next = walker.next()

      if (!next || next.kind === 'semi_colon' || next.kind === 'new_line') {
        return {
          kind: 'return_statement',
          loc: peek.loc,
        }
      }

      const expression = this.expressions.parse(walker)
      this.forwardToPrimaryToken(walker)

      return {
        kind: 'return_statement',
        loc: peek.loc.merge(expression.loc),
      }
    }

    if (peek.kind === 'continue') {
      walker.next()
      this.forwardToPrimaryToken(walker)

      return {
        kind: 'continue_statement',
        loc: peek.loc,
      }
    }

    if (peek.kind === 'let') {
      walker.next()
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
      const equals = walker.next()

      if (!equals || equals.kind !== 'equals') {
        return {
          kind: 'let_statement',
          identifier,
          loc: peek.loc.merge(identifier.loc),
        }
      }

      const initializer = this.expressions.parse(walker)
      this.forwardToPrimaryToken(walker)

      return {
        kind: 'let_statement',
        identifier,
        initializer,
        loc: peek.loc.merge(initializer.loc),
      }
    }

    if (peek.kind === 'const') {
      walker.next()
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
      const equals = walker.next()

      if (!equals) {
        throw this.createPeekError(walker)
      }

      if (equals.kind !== 'equals') {
        throw this.createUnexpectedError(equals, walker, '=')
      }

      const expression = this.expressions.parse(walker)
      this.forwardToPrimaryToken(walker)

      return {
        kind: 'const_statement',
        identifier,
        initializer: expression,
        loc: peek.loc.merge(expression.loc),
      }
    }

    if (peek.kind === 'left_brace') {
      return this.block.parse(walker)
    }

    const expression = this.expressions.parse(walker)

    return {
      kind: 'expression_statement',
      expression,
      loc: expression.loc,
    }
  }
}
