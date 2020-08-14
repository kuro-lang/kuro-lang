import { injectable, inject } from 'tsyringe'
import { IParser, LiteralExpression } from '../../..'
import {
  TokenWalker,
  LiteralToken,
  ArrayLiteralExpression,
  ParserToken,
  SourceCode,
} from '../../../types'
import { isLiteralToken } from '../../../utils'

@injectable()
/**
 * LiteralExpressionParser class.
 */
@injectable()
export class LiteralExpressionParser implements IParser<LiteralExpression> {
  constructor(
    @inject(ParserToken.ArrayLiteralParser)
    protected arrayLiteralParser: IParser<ArrayLiteralExpression>
  ) {}

  validate(): boolean {
    return true
  }

  parse(source: SourceCode, walker: TokenWalker): LiteralExpression {
    const token = walker.value()

    if (isLiteralToken(token)) {
      const expression = this.makeExpressionFromToken(token)
      walker.next()

      return expression
    }

    if (token.kind === 'left_brace') {
      return this.arrayLiteralParser.parse(source, walker)
    }
  }

  /**
   * Returns literal expression by given literal token.
   *
   * @param token Literal token.
   */
  protected makeExpressionFromToken(token: LiteralToken): LiteralExpression {
    const { loc } = token

    if (token.kind === 'boolean_literal') {
      return {
        kind: 'boolean_literal_expression',
        value: token.value,
        loc,
      }
    }

    if (token.kind === 'numeric_literal') {
      return {
        kind: 'numeric_literal_expression',
        value: token.value,
        loc,
      }
    }

    if (token.kind === 'string_literal') {
      return {
        kind: 'string_literal_expression',
        value: token.value,
        loc,
      }
    }
  }
}
