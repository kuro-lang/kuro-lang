import { BinaryExpressionParser } from '../..'
import { injectable } from 'inversify'
import { PureTokenKind, ParserToken, Expression } from '../../types'
import { IParser } from '../../interfaces'
import { injectParser } from './parserContainer'

/**
 * OrParser class.
 */
@injectable()
export class OrParser extends BinaryExpressionParser {
  kinds: PureTokenKind[] = ['bar_bar']

  @injectParser(ParserToken.And) protected subParser: IParser<Expression>
}
