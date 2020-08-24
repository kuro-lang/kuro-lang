import { Parser } from '../..'
import {
  SourceCode,
  TokenWalker,
  Node,
  ParserToken,
  Expression,
  Identifier,
} from '../../types'
import { injectable, inject } from 'tsyringe'
import { IParser } from '../../interfaces'
import { loop } from '../../utils'

/**
 * PropertyAccessAndElementAccessAndFunctionCallParser class.
 */
@injectable()
export class PropertyAccessAndElementAccessAndFunctionCallParser extends Parser {
  constructor(
    @inject(ParserToken.Expressions) protected expressions: IParser<Expression>,
    @inject(ParserToken.PostIncrementAndPostDecrement)
    protected postIncrementAndPostDecrement: IParser<Expression>
  ) {
    super()
  }

  parse(source: SourceCode, walker: TokenWalker): Node {
    const peek = walker.peek()

    if (!peek) {
      throw this.createPeekError(source, walker)
    }

    if (peek.kind === 'dot') {
      const expression = this.expressions.parse(source, walker)
      const dotToken = walker.next()

      if (!dotToken) {
        throw this.createPeekError(source, walker)
      }

      const identifierToken = walker.next()

      if (!identifierToken) {
        throw this.createPeekError(source, walker)
      }

      if (identifierToken.kind !== 'identifier') {
        throw this.createUnexpectedError(
          source,
          identifierToken.loc,
          'identifier'
        )
      }

      const identifier: Identifier = identifierToken

      return {
        kind: 'property_access_expression',
        expression,
        identifier,
        loc: expression.loc.merge(identifier.loc),
      }
    }

    if (peek.kind === 'left_bracket') {
      const expression = this.expressions.parse(source, walker)
      const leftBracketToken = walker.next()

      if (!leftBracketToken) {
        throw this.createPeekError(source, walker)
      }

      if (leftBracketToken.kind !== 'left_bracket') {
        throw this.createUnexpectedError(source, leftBracketToken.loc, '[')
      }

      const index = this.expressions.parse(source, walker)

      const rightBracketToken = walker.next()

      if (!rightBracketToken) {
        throw this.createPeekError(source, walker)
      }

      if (rightBracketToken.kind !== 'right_bracket') {
        throw this.createUnexpectedError(source, rightBracketToken.loc, ']')
      }

      return {
        kind: 'element_access_expression',
        expression,
        index,
        loc: expression.loc.merge(rightBracketToken.loc),
      }
    }

    if (peek.kind === 'left_paren') {
      const expression = this.expressions.parse(source, walker)
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
            expression,
            arguments: args,
            loc: expression.loc.merge(rightParenToken.loc),
          })
        }

        if (peek.kind === 'new_line' || peek.kind === 'comma') {
          walker.next()
        }

        const arg = this.expressions.parse(source, walker)
        args.push(arg)
      })
    }

    return this.postIncrementAndPostDecrement.parse(source, walker)
  }
}
