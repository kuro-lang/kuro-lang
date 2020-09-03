import { BinaryExpressionParser } from '../../..'
import { injectable } from 'inversify'
import { injectParser } from '../parserContainer'
import { ParserToken, Expression, PureTokenKind } from '../../../types'
import { IParser } from '../../../interfaces'

/**
 * AndParsre class.
 */
@injectable()
export class AndParsre extends BinaryExpressionParser {
  @injectParser(ParserToken.Or) subParser: IParser<Expression>

  kinds: PureTokenKind[] = ['and_and']
}
