import { PostfixUnaryExpressionParser } from '../..'
import { injectable } from 'inversify'
import { ParserToken, Expression, TokenKind } from '../../types'
import { IParser } from '../../interfaces'
import { injectParser } from './parserContainer'

/**
 * PostIncrementAndPostDecrementParser class.
 */
@injectable()
export class PostIncrementAndPostDecrementParser extends PostfixUnaryExpressionParser {
  kinds: TokenKind[] = ['plus_plus', 'minus_minus']

  @injectParser(ParserToken.PropertyAccessAndElementAccessAndFunctionCall)
  protected subParser: IParser<Expression>
}
