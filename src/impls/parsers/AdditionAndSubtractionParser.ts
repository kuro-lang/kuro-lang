import { BinaryExpressionParser } from '../../abstracts'
import { PureTokenKind, ParserToken, Expression } from '../../types'
import { injectable } from 'inversify'
import { IParser } from '../../interfaces'
import { injectParser } from './parserContainer'

/**
 * AdditionAndSubtractionParser class.
 */
@injectable()
export class AdditionAndSubtractionParser extends BinaryExpressionParser {
  kinds: PureTokenKind[] = ['plus', 'minus']

  @injectParser(ParserToken.MultiplicationAndDivisionSurplus)
  protected subParser: IParser<Expression>
}
