import { BinaryExpressionParser } from '../../abstracts'
import { PureTokenKind, ParserToken, Expression } from '../../types'
import { injectable, inject } from 'tsyringe'
import { IParser } from '../../interfaces'

/**
 * AdditionAndSubtractionParser class.
 */
@injectable()
export class AdditionAndSubtractionParser extends BinaryExpressionParser {
  kinds: PureTokenKind[] = ['plus', 'minus']

  constructor(
    @inject(ParserToken.Comparison)
    protected subParser: IParser<Expression>
  ) {
    super()
  }
}
