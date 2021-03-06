import { Parser, Expression } from '../..'
import { injectParser } from './parserContainer'
import { ParserToken } from '../../types'
import { IParser } from '../../interfaces'
import { TokenWalker } from '../../classes'
import { injectable } from 'inversify'

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
   * ControlsParser.
   */
  @injectParser(ParserToken.Controls) controls: IParser<Expression>

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

    return this.controls.parse(walker)
  }
}
