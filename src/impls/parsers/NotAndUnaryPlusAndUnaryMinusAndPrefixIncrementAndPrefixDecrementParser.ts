import { PrefixUnaryExpressionParser } from '../..'
import { TokenKind, ParserToken, Expression } from '../../types'
import { inject, injectable } from 'tsyringe'
import { IParser } from '../../interfaces'

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

  constructor(
    @inject(ParserToken.Power) protected subParser: IParser<Expression>
  ) {
    super()
  }
}
