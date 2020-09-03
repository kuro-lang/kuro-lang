import { BinaryExpressionParser } from '../..'
import { injectable } from 'inversify'
import { injectParser } from './parserContainer'
import { ParserToken, Expression, PureTokenKind } from '../../types'
import { IParser } from '../../interfaces'

/**
 * AndParser class.
 */
@injectable()
export class AndParser extends BinaryExpressionParser {
  @injectParser(ParserToken.Or) subParser: IParser<Expression>

  kinds: PureTokenKind[] = ['and_and']
}
