import { PostfixUnaryExpressionParser } from '../..'
import { injectable, inject } from 'tsyringe'
import { ParserToken, Expression, TokenKind } from '../../types'
import { IParser } from '../../interfaces'

/**
 * PostIncrementAndPostDecrementParser class.
 */
@injectable()
export class PostIncrementAndPostDecrementParser extends PostfixUnaryExpressionParser {
  kinds: TokenKind[] = ['plus_plus', 'minus_minus']

  constructor(
    @inject(
      ParserToken.NotAndUnaryPlusAndUnaryMinusAndPrefixIncrementAndPrefixDecrement
    )
    protected subParser: IParser<Expression>
  ) {
    super()
  }
}
