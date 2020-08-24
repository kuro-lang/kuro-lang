import { BinaryExpressionParser, PureTokenKind } from '../..'
import { injectable, inject } from 'tsyringe'
import { ParserToken, Expression } from '../../types'
import { IParser } from '../../interfaces'

/**
 * ComparisonParser class.
 */
@injectable()
export class ComparisonParser extends BinaryExpressionParser {
  kinds: PureTokenKind[] = [
    'less_than',
    'less_equals_than',
    'greater_than',
    'greater_equals_than',
  ]

  constructor(
    @inject(ParserToken.Equivalent) protected subParser: IParser<Expression>
  ) {
    super()
  }
}
