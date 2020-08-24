import { BinaryExpressionParser } from '../../abstracts'
import { PureTokenKind, ParserToken, Expression } from '../../types'
import { injectable, inject } from 'tsyringe'
import { IParser } from '../../interfaces'

/**
 * MultiplicationAndDivisionSurplusParser class.
 */
@injectable()
export class MultiplicationAndDivisionSurplusParser extends BinaryExpressionParser {
  kinds: PureTokenKind[] = ['asterisk', 'slash', 'percent']

  constructor(
    @inject(ParserToken.AdditionAndSubtraction)
    protected subParser: IParser<Expression>
  ) {
    super()
  }
}
