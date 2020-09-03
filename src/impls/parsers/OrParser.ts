import { BinaryExpressionParser } from '../..'
import { injectable } from 'inversify'
import { injectParser } from './parserContainer'
import { ParserToken, Expression, PureTokenKind } from '../../types'
import { IParser } from '../../interfaces'

/**
 * OrParser class.
 */
@injectable()
export class OrParser extends BinaryExpressionParser {
  @injectParser(ParserToken.Equivalent) subParser: IParser<Expression>

  kinds: PureTokenKind[] = ['bar_bar']
}
