import { BinaryExpressionParser, PureTokenKind } from '../..'
import { injectable, inject } from 'tsyringe'
import { ParserToken, Expression } from '../../types'
import { IParser } from '../../interfaces'

/**
 * AssignParser class.
 */
@injectable()
export class AssignParser extends BinaryExpressionParser {
  kinds: PureTokenKind[] = [
    'equals',
    'plus_equals',
    'minus_equals',
    'asterisk_equals',
    'asterisk_asterisk_equals',
    'slash_equals',
    'percent_equals',
  ]

  constructor(
    @inject(ParserToken.Atom) protected subParser: IParser<Expression>
  ) {
    super()
  }
}
