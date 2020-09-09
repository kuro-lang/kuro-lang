import { BinaryExpressionParser } from '../..'
import { injectable } from 'inversify'
import { injectParser } from './parserContainer'
import { ParserToken, Expression, PureTokenKind } from '../../types'
import { IParser } from '../../interfaces'

/**
 * PipeParser class.
 */
@injectable()
export class PipeParser extends BinaryExpressionParser {
  @injectParser(ParserToken.Assign) subParser: IParser<Expression>

  kinds: PureTokenKind[] = ['minus_greater_than']
}
