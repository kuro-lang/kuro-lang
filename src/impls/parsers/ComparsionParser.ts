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
 * ComparsionParser class.
 */
@injectable()
export class ComparsionParser extends BinaryExpressionParser {
  @injectParser(ParserToken.AddAndSub) subParser: IParser<Expression>

  kinds: PureTokenKind[] = [
    'less_than',
    'less_equals_than',
    'greater_than',
    'greater_equals_than',
  ]
}
