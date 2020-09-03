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
 * OrParser class.
 */
@injectable()
export class OrParser extends BinaryExpressionParser {
  @injectParser(ParserToken.Equivalent) subParser: IParser<Expression>

  kinds: PureTokenKind[] = ['bar_bar']
}
