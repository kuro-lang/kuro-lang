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
import { Parser } from './Parser'
import { injectable } from 'inversify'

/**
 * BinaryExpressionParser class.
 */
@injectable()
export abstract class BinaryExpressionParser extends Parser {
  /**
   * Sub parser.
   */
  protected abstract subParser: IParser

  /**
   * Token kinds.
   */
  protected kinds: PureTokenKind[] = []

  parse(source: SourceCode, walker: TokenWalker): Node {
    console.log(`Start ${this.kinds.join(', ')}`)
    let expression = this.subParser.parse(source, walker)
    console.log(`End ${this.kinds.join(', ')}`)

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
