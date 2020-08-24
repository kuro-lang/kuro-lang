import { BinaryExpressionParser, PureTokenKind } from '../..'
import { injectable, inject } from 'tsyringe'
import { ParserToken, Expression } from '../../types'
import { IParser } from '../../interfaces'

/**
 * EquivalentParser class.
 */
@injectable()
export class EquivalentParser extends BinaryExpressionParser {
  kinds: PureTokenKind[] = ['equals_equals', 'exclamation_equals']

  constructor(
    @inject(ParserToken.And) protected subParser: IParser<Expression>
  ) {
    super()
  }
}
