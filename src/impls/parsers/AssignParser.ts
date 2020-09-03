import { BinaryExpressionParser } from '../..'
import { injectable } from 'inversify'
import { injectParser } from './parserContainer'
import { ParserToken, Expression, PureTokenKind } from '../../types'
import { IParser } from '../../interfaces'

/**
 * AssignParser class.
 */
@injectable()
export class AssignParser extends BinaryExpressionParser {
  @injectParser(ParserToken.And) subParser: IParser<Expression>

  kinds: PureTokenKind[] = [
    'equals',
    'plus_equals',
    'minus_equals',
    'asterisk_equals',
    'asterisk_asterisk_equals',
    'slash_equals',
    'percent_equals',
  ]
}
