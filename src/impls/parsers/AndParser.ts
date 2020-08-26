import { BinaryExpressionParser } from '../..'
import { injectable } from 'inversify'
import { PureTokenKind, ParserToken, Expression } from '../../types'
import { IParser } from '../../interfaces'
import { injectParser } from './parserContainer'

/**
 * AndParser class.
 */
@injectable()
export class AndParser extends BinaryExpressionParser {
  kinds: PureTokenKind[] = ['and_and']

  @injectParser(ParserToken.Equivalent) protected subParser: IParser<Expression>
}
