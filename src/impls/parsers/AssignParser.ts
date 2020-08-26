import { BinaryExpressionParser, PureTokenKind } from '../..'
import { injectable } from 'inversify'
import { ParserToken, Expression } from '../../types'
import { IParser } from '../../interfaces'
import { injectParser } from './parserContainer'

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

  @injectParser(ParserToken.Or) protected subParser: IParser<Expression>
}
