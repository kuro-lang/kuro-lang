import { BinaryExpressionParser } from '../..'
import { injectable, inject } from 'tsyringe'
import { PureTokenKind, ParserToken, Expression } from '../../types'
import { IParser } from '../../interfaces'

/**
 * AndParser class.
 */
@injectable()
export class AndParser extends BinaryExpressionParser {
  kinds: PureTokenKind[] = ['and_and']

  constructor(
    @inject(ParserToken.Or) protected subParser: IParser<Expression>
  ) {
    super()
  }
}
