import { injectable } from 'inversify'
import {
  Parser,
  Expression,
  ParserToken,
  IParser,
  TokenKind,
  TokenWalker,
  Token,
} from '../..'
import { injectParser } from '.'

/**
 * PrefixParser class.
 */
@injectable()
export class PrefixParser extends Parser<Expression> {
  /**
   * CallParser.
   */
  @injectParser(ParserToken.Call) call: IParser<Expression>

  readonly prefixes: TokenKind[] = ['plus', 'minus', 'exclamation']

  parse(walker: TokenWalker): Expression {
    const peek = walker.peek()

    if (!peek) {
      throw this.createPeekError(walker)
    }

    if (!this.isPrefixToken(peek)) {
      return this.call.parse(walker)
    }

    walker.next()
    const expression = this.call.parse(walker)

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
