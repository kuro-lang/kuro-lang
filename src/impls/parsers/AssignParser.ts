import { injectable } from 'inversify'
import {
  BinaryExpressionParser,
  ParserToken,
  IParser,
  Expression,
  PureTokenKind,
} from '../..'
import { injectParser } from '.'

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
