import { Parser, Expression } from '../..'
import { injectable } from 'inversify'
import { injectParser } from './parserContainer'
import { ParserToken, TokenKind, Token } from '../../types'
import { IParser } from '../../interfaces'
import { TokenWalker } from '../../classes'

/**
 * AwaitParser class.
 */
@injectable()
export class AwaitParser extends Parser<Expression> {
  /**
   * GroupParser.
   */
  @injectParser(ParserToken.Group) group: IParser<Expression>

  readonly prefixes: TokenKind[] = ['await']

  parse(walker: TokenWalker): Expression {
    const peek = walker.peek()

    if (!peek) {
      throw this.createPeekError(walker)
    }

    if (!this.isPrefixToken(peek)) {
      return this.group.parse(walker)
    }

    walker.next()
    const expression = this.group.parse(walker)

    return {
      kind: 'prefix_expression',
      operator: peek,
      right: expression,
      loc: peek.loc.merge(expression.loc),
    }
  }

  /**
   * Returns whether given token is a prefix operator token.
   * @param token Token.
   */
  isPrefixToken(token: Token): boolean {
    return this.prefixes.includes(token.kind)
  }
}
