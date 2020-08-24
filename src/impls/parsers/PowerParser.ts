import { BinaryExpressionParser } from '../..'
import { injectable, inject } from 'tsyringe'
import { ParserToken, Expression, PureTokenKind } from '../../types'
import { IParser } from '../../interfaces'

/**
 * PowerParser class.
 */
@injectable()
export class PowerParser extends BinaryExpressionParser {
  kinds: PureTokenKind[] = ['asterisk_asterisk']

  constructor(
    @inject(ParserToken.MultiplicationAndDivisionSurplus)
    protected subParser: IParser<Expression>
  ) {
    super()
  }
}
