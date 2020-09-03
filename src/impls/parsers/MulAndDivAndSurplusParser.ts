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
 * MulAndDivAndSurplusParser class.
 */
@injectable()
export class MulAndDivAndSurplusParser extends BinaryExpressionParser {
  @injectParser(ParserToken.Power) subParser: IParser<Expression>

  kinds: PureTokenKind[] = ['asterisk', 'slash', 'percent']
}
