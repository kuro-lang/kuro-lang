import { injectable } from 'inversify'
import { Parser, Expression, ParserToken, IParser, TokenWalker } from '../..'
import { injectParser } from '.'

/**
 * GroupParser class.
 */
@injectable()
export class GroupParser extends Parser<Expression> {
  /**
   * ExpressionsParser.
   */
  @injectParser(ParserToken.Expressions) expressions: IParser<Expression>

  /**
   * AtomParser.
   */
  @injectParser(ParserToken.Atom) atom: IParser<Expression>

  parse(walker: TokenWalker): Expression {
    const peek = walker.peek()

    if (!peek) {
      throw this.createPeekError(walker)
    }

    if (peek.kind === 'left_paren') {
      walker.next()

      const node = this.expressions.parse(walker)
      const token = walker.next()

      if (!token) {
        throw this.createPeekError(walker)
      }

      if (token.kind === 'right_paren') {
        return node
      }

      throw this.createUnexpectedError(token, walker, ')')
    }

    return this.atom.parse(walker)
  }
}
