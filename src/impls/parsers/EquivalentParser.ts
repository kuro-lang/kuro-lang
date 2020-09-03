import { BinaryExpressionParser } from '../..'
import { injectable } from 'inversify'
import { injectParser } from './parserContainer'
import { ParserToken, Expression, PureTokenKind } from '../../types'
import { IParser } from '../../interfaces'

/**
 * EquivalentParser class.
 */
@injectable()
export class EquivalentParser extends BinaryExpressionParser {
  @injectParser(ParserToken.Comparsion) subParser: IParser<Expression>

  kinds: PureTokenKind[] = ['equals_equals', 'exclamation_equals']
}
