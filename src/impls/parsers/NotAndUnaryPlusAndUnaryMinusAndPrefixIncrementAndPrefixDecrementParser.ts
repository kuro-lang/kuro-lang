import { PrefixUnaryExpressionParser } from '../..'
import { TokenKind, ParserToken, Expression } from '../../types'
import { injectable } from 'inversify'
import { IParser } from '../../interfaces'
import { injectParser } from './parserContainer'

/**
 * NotAndUnaryPlusAndUnaryMinusAndPrefixIncrementAndPrefixDecrementParser class.
 */
@injectable()
export class NotAndUnaryPlusAndUnaryMinusAndPrefixIncrementAndPrefixDecrementParser extends PrefixUnaryExpressionParser {
  kinds: TokenKind[] = [
    'exclamation',
    'plus',
    'minus',
    'plus_plus',
    'minus_minus',
  ]

  @injectParser(ParserToken.PostIncrementAndPostDecrement)
  protected subParser: IParser<Expression>
}
