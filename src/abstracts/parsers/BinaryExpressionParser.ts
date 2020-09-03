import { IParser, TokenWalker } from '../..'
import { PureTokenKind, Token, PureToken, Expression } from '../../types'
import { loop, useEquals } from '../../utils'
import { Parser } from './Parser'
import { injectable } from 'inversify'

/**
 * BinaryExpressionParser class.
 */
@injectable()
export abstract class BinaryExpressionParser extends Parser<Expression> {
  /**
   * Sub parser.
   */
  protected abstract subParser: IParser<Expression>

  /**
   * Token kinds.
   */
  protected kinds: PureTokenKind[] = []

  parse(walker: TokenWalker): Expression {
    let expression = this.subParser.parse(walker)

    return loop(({ end }) => {
      const peek = walker.peek()

      if (!peek) {
        return end(expression)
      }

      if (this.isOperatorToken(peek)) {
        walker.next()
        const right = this.subParser.parse(walker)

        expression = {
          kind: 'binary_expression',
          operator: peek,
          left: expression,
          right,
          loc: expression.loc.merge(right.loc),
        }
      } else {
        return end(expression)
      }
    })
  }

  /**
   * Returns whether given token is the operator token.
   *
   * @param token Token.
   */
  protected isOperatorToken(token: Token): token is PureToken {
    return !!this.kinds.find(useEquals(token.kind))
  }
}
