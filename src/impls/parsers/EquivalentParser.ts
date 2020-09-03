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
 * EquivalentParser class.
 */
@injectable()
export class EquivalentParser extends BinaryExpressionParser {
  @injectParser(ParserToken.Comparsion) subParser: IParser<Expression>

  kinds: PureTokenKind[] = ['equals_equals', 'exclamation_equals']
}
