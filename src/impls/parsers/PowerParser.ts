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
 * PowerPower class.
 */
@injectable()
export class PowerParser extends BinaryExpressionParser {
  @injectParser(ParserToken.Prefix) subParser: IParser<Expression>

  kinds: PureTokenKind[] = ['asterisk_asterisk']
}
