import { Parser, Expression } from '../../..'
import { injectable } from 'inversify'
import { injectParser } from '../parserContainer'
import { ParserToken } from '../../../types'
import { IParser } from '../../../interfaces'
import { TokenWalker } from '../../../classes'

/**
 * ExpressionParser class.
 */
@injectable()
export class ExpressionsParser extends Parser<Expression> {
  /**
   * Expression root parser.
   */
  @injectParser(ParserToken.Assign) expressionRoot: IParser<Expression>

  parse(walker: TokenWalker): Expression {
    return this.expressionRoot.parse(walker)
  }
}
