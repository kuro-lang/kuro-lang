import { IParser, Expression } from '../..'
import { SourceCode, TokenWalker, TokenKind } from '../../types'
import { loop } from '../../utils'

/**
 * BinaryExpressionParser class.
 */
export abstract class BinaryExpressionParser implements IParser<Expression> {
  /**
   * Sub parser.
   */
  abstract subParser: IParser<Expression>

  /**
   * Token kinds.
   */
  kinds: TokenKind[] = []

  parse(source: SourceCode, walker: TokenWalker): Expression {
    let expression = this.subParser.parse(source, walker)

    return loop(({ end }) => {
      const peek = walker.peek()

      if (!peek) {
        return end(expression)
      }

      if (this.kinds.includes(peek.kind)) {
        walker.next()
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
}
