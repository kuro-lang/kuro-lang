import { BinaryExpressionParser } from '../..'
import { injectable } from 'inversify'
import { ParserToken, Expression, PureTokenKind } from '../../types'
import { IParser } from '../../interfaces'
import { injectParser } from './parserContainer'

/**
 * PowerParser class.
 */
@injectable()
export class PowerParser extends BinaryExpressionParser {
  kinds: PureTokenKind[] = ['asterisk_asterisk']

  @injectParser(
    ParserToken.NotAndUnaryPlusAndUnaryMinusAndPrefixIncrementAndPrefixDecrement
  )
  protected subParser: IParser<Expression>
}
