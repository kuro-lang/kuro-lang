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
 * PostfixUnaryExpressionParser class.
 */
export abstract class PostfixUnaryExpressionParser extends Parser {
  /**
   * Sub parser.
   */
  protected abstract subParser: IParser<Expression>

  /**
   * Token kinds.
   */
  protected kinds: TokenKind[] = []

  parse(source: SourceCode, walker: TokenWalker): Node {
    const expression = this.subParser.parse(source, walker)

    const peek = walker.peek()

    if (!peek) {
      return expression
    }

    if (this.isOperatorToken(peek)) {
      return {
        kind: 'prefix_unary_expression',
        operator: peek,
        operand: expression,
        loc: expression.loc.merge(peek.loc),
      }
    }

    return expression
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
