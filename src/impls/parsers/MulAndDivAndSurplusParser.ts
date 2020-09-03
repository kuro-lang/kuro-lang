import { BinaryExpressionParser } from '../../..'
import { injectable } from 'inversify'
import { injectParser } from '../parserContainer'
import { ParserToken, Expression, PureTokenKind } from '../../../types'
import { IParser } from '../../../interfaces'

/**
 * MulAndDivAndSurplusParser class.
 */
@injectable()
export class MulAndDivAndSurplusParser extends BinaryExpressionParser {
  @injectParser(ParserToken.Power) subParser: IParser<Expression>

  kinds: PureTokenKind[] = ['asterisk', 'slash', 'percent']
}
