import { BinaryExpressionParser } from '../..'
import { injectable, inject } from 'tsyringe'
import { PureTokenKind, ParserToken, Expression } from '../../types'
import { IParser } from '../../interfaces'

/**
 * OrParser class.
 */
@injectable()
export class OrParser extends BinaryExpressionParser {
  kinds: PureTokenKind[] = ['bar_bar']

  constructor(
    @inject(ParserToken.Assign) protected subParser: IParser<Expression>
  ) {
    super()
  }
}
