import { BinaryExpressionParser } from '../../..'
import { injectable } from 'inversify'
import { injectParser } from '../parserContainer'
import { ParserToken, Expression, PureTokenKind } from '../../../types'
import { IParser } from '../../../interfaces'

/**
 * AddAndSubParser class.
 */
@injectable()
export class AddAndSubParser extends BinaryExpressionParser {
  @injectParser(ParserToken.MulAndDivAndSurplus) subParser: IParser<Expression>

  kinds: PureTokenKind[] = ['plus', 'minus']
}
