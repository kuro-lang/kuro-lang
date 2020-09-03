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
 * AddAndSubParser class.
 */
@injectable()
export class AddAndSubParser extends BinaryExpressionParser {
  @injectParser(ParserToken.MulAndDivAndSurplus) subParser: IParser<Expression>

  kinds: PureTokenKind[] = ['plus', 'minus']
}
