import { IParser } from '../..'
import {
  SourceCode,
  TokenWalker,
  PureTokenKind,
  Token,
  PureToken,
  Node,
} from '../../types'
import { loop, useEquals } from '../../utils'

/**
 * BinaryExpressionParser class.
 */
export abstract class BinaryExpressionParser implements IParser {
  /**
   * Sub parser.
   */
  protected abstract subParser: IParser

  /**
   * Token kinds.
   */
  protected kinds: PureTokenKind[] = []

  parse(source: SourceCode, walker: TokenWalker): Node {
    let expression = this.subParser.parse(source, walker)

    return loop(({ end }) => {
      const peek = walker.peek()

      if (!peek) {
        return end(expression)
      }

      if (this.isOperatorToken(peek)) {
        console.log(walker.next())
        const right = this.subParser.parse(source, walker)

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
