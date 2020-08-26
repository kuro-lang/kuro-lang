import { BinaryExpressionParser, PureTokenKind } from '../..'
import { injectable } from 'inversify'
import { ParserToken, Expression } from '../../types'
import { IParser } from '../../interfaces'
import { injectParser } from './parserContainer'

/**
 * EquivalentParser class.
 */
@injectable()
export class EquivalentParser extends BinaryExpressionParser {
  kinds: PureTokenKind[] = ['equals_equals', 'exclamation_equals']

  @injectParser(ParserToken.Comparison) protected subParser: IParser<Expression>
}
