import { injectable } from 'inversify'
import {
  Parser,
  Statement,
  ParserToken,
  IParser,
  Expression,
  TokenWalker,
  Identifier,
  loop,
} from '../..'
import { injectParser } from '.'

/**
 * StatementsParser class.
 */
@injectable()
export class StatementsParser extends Parser<Statement> {
  /**
   * ExpressionsParser.
   */
  @injectParser(ParserToken.Expressions) expressions: IParser<Expression>

  parse(walker: TokenWalker): Statement {
    const peek = walker.peek()
    this.forwardToPrimaryToken(walker)

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

      if (equals.kind === 'equals') {
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
      walker.next()
      const statements: Statement[] = []

      loop(({ end }) => {
        const peek = this.forwardToPrimaryToken(walker)

        if (!peek) {
          throw this.createPeekError(walker)
        }

        if (peek.kind === 'right_brace') {
          return end()
        }

        const statement = this.parse(walker)
        statements.push(statement)
      })
    }

    const expression = this.expressions.parse(walker)

    return {
      kind: 'expression_statement',
      expression,
      loc: expression.loc,
    }
  }
}
