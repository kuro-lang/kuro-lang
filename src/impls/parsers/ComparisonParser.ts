import { BinaryExpressionParser, PureTokenKind } from '../..'
import { injectable } from 'inversify'
import { ParserToken, Expression } from '../../types'
import { IParser } from '../../interfaces'
import { injectParser } from './parserContainer'

/**
 * ComparisonParser class.
 */
@injectable()
export class ComparisonParser extends BinaryExpressionParser {
  kinds: PureTokenKind[] = [
    'less_than',
    'less_equals_than',
    'greater_than',
    'greater_equals_than',
  ]

  @injectParser(ParserToken.AdditionAndSubtraction)
  protected subParser: IParser<Expression>
}
