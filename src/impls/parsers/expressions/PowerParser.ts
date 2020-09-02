import { BinaryExpressionParser } from '../../..'
import { injectable } from 'inversify'
import { injectParser } from '../parserContainer'
import { ParserToken, Expression, PureTokenKind } from '../../../types'
import { IParser } from '../../../interfaces'

/**
 * PowerPower class.
 */
@injectable()
export class PowerParser extends BinaryExpressionParser {
  @injectParser(ParserToken.Prefix) subParser: IParser<Expression>

  kinds: PureTokenKind[] = ['asterisk_asterisk']
}
