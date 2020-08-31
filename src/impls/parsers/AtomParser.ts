import {
  Node,
  SourceCode,
  TokenWalker,
  ParserToken,
  Expression,
  Identifier,
} from '../../types'
import { injectable } from 'inversify'
import { Parser } from '../../abstracts'
import { injectParser } from './parserContainer'
import { IParser } from '../../interfaces'
import { loop } from '../..'

/**
 * AtomParser class.
 */
@injectable()
export class AtomParser extends Parser {
  @injectParser(ParserToken.Expressions) protected expressions: IParser<
    Expression
  >

  parse(source: SourceCode, walker: TokenWalker): Node {
    const token = walker.next()

    if (!token) {
      throw this.createPeekError(source, walker)
    }

    if (token.kind === 'boolean_literal') {
      return {
        ...token,
        kind: 'boolean_literal_expression',
      }
    }

    if (token.kind === 'numeric_literal') {
      return {
        ...token,
        kind: 'numeric_literal_expression',
      }
    }

    if (token.kind === 'string_literal') {
      return {
        ...token,
        kind: 'string_literal_expression',
      }
    }

    if (token.kind === 'identifier') {
      const identifier: Identifier = { ...token }
      const peek = walker.peek()

      if (peek && peek.kind !== 'left_paren') {
        return identifier
      }

      const leftParenToken = walker.next()

      if (!leftParenToken) {
        throw this.createPeekError(source, walker)
      }

      if (leftParenToken.kind !== 'left_paren') {
        throw this.createUnexpectedError(source, leftParenToken.loc, '(')
      }

      const args: Expression[] = []

      return loop(({ end }) => {
        const peek = walker.peek()

        if (!peek) {
          throw this.createPeekError(source, walker)
        }

        if (peek.kind === 'right_paren') {
          const rightParenToken = walker.next()

          if (!rightParenToken) {
            throw this.createPeekError(source, walker)
          }

          if (rightParenToken.kind !== 'right_paren') {
            throw this.createUnexpectedError(source, rightParenToken.loc, ')')
          }

          return end({
            kind: 'call_expression',
            expression: identifier,
            arguments: args,
            loc: identifier.loc.merge(rightParenToken.loc),
          })
        }

        if (peek.kind === 'new_line' || peek.kind === 'comma') {
          walker.next()
        }

        const arg = this.expressions.parse(source, walker)
        args.push(arg)
      })
    }

    throw this.createUnexpectedError(source, token.loc)
  }
}
