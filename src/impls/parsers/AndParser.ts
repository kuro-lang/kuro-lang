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
 * AndParser class.
 */
@injectable()
export class AndParser extends BinaryExpressionParser {
  @injectParser(ParserToken.Or) subParser: IParser<Expression>

  kinds: PureTokenKind[] = ['and_and']
}
