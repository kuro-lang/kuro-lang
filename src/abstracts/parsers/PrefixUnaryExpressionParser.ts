import { Parser } from '.'
import {
  SourceCode,
  TokenWalker,
  Node,
  TokenKind,
  Token,
  PureToken,
  Expression,
} from '../../types'
import { IParser } from '../../interfaces'
import { useEquals } from '../..'

/**
 * PrefixUnaryExpressionParser class.
 */
export abstract class PrefixUnaryExpressionParser extends Parser {
  /**
   * Sub parser.
   */
  protected abstract subParser: IParser<Expression>

  /**
   * Token kinds.
   */
  protected kinds: TokenKind[] = []

  parse(source: SourceCode, walker: TokenWalker): Node {
    const peek = walker.peek()

    if (!peek) {
      throw this.createPeekError(source, walker)
    }

    if (this.isOperatorToken(peek)) {
      walker.next()
      const expression = this.subParser.parse(source, walker)

      return {
        kind: 'prefix_unary_expression',
        operator: peek,
        operand: expression,
        loc: peek.loc.merge(expression.loc),
      }
    }

    return this.subParser.parse(source, walker)
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
