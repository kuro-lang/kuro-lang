import { BinaryExpressionParser } from '../..'
import { injectable } from 'inversify'
import { injectParser } from './parserContainer'
import { ParserToken, Expression, PureTokenKind } from '../../types'
import { IParser } from '../../interfaces'

/**
 * Comparsion class.
 */
@injectable()
export class Comparsion extends BinaryExpressionParser {
  @injectParser(ParserToken.AddAndSub) subParser: IParser<Expression>

  kinds: PureTokenKind[] = [
    'less_than',
    'less_equals_than',
    'greater_than',
    'greater_equals_than',
  ]
}
