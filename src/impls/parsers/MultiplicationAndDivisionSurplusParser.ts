import { BinaryExpressionParser } from '../../abstracts'
import { PureTokenKind, ParserToken, Expression } from '../../types'
import { injectable } from 'inversify'
import { IParser } from '../../interfaces'
import { injectParser } from './parserContainer'

/**
 * MultiplicationAndDivisionSurplusParser class.
 */
@injectable()
export class MultiplicationAndDivisionSurplusParser extends BinaryExpressionParser {
  kinds: PureTokenKind[] = ['asterisk', 'slash', 'percent']

  @injectParser(ParserToken.Power)
  protected subParser: IParser<Expression>
}
