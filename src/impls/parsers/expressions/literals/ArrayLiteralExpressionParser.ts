import { IParser } from '../../../../interfaces'
import {
  ArrayLiteralExpression,
  TokenWalker,
  ParserToken,
  Expression,
  SourceCode,
  RightBraceToken,
} from '../../../../types'
import { inject, injectable } from 'tsyringe'
import { UnexpectedTokenError } from '../../../errors'
import { Loc } from '../../../../classes'
import { loop } from '../../../../utils'

/**
 * ArrayLiteralExpressionParser class.
 */
@injectable()
export class ArrayLiteralExpressionParser
  implements IParser<ArrayLiteralExpression> {
  /**
   * ArrayLiteralExpressionParser constructor.
   *
   * @param expressionParser Expression parser.
   */
  constructor(
    @inject(ParserToken.ExpressionParser)
    protected expressionParser: IParser<Expression>
  ) {}

  validate(walker: TokenWalker): boolean {
    return walker.value().kind === 'left_brace'
  }

  parse(source: SourceCode, walker: TokenWalker): ArrayLiteralExpression {
    const leftBraceToken = walker.value()

    if (leftBraceToken.kind !== 'left_brace') {
      throw new UnexpectedTokenError(
        `unexpected token ${leftBraceToken.loc.slice(source.code)}`,
        leftBraceToken.loc
      )
    }

    const elements: Expression[] = []

    const rightBraceToken = loop<RightBraceToken>(({ end }) => {
      const token = walker.next()

      if (typeof token === 'undefined') {
        throw new UnexpectedTokenError(
          `unexpected token, got end of script`,
          Loc.fromStart(walker.index())
        )
      }

      if (token.kind === 'right_brace') {
        end(token)
      }

      if (token.kind === 'comma' || token.kind === 'new_line') {
        walker.next()
      }

      elements.push(this.expressionParser.parse(source, walker))
    })

    return {
      kind: 'array_literal_expression',
      value: elements,
      loc: leftBraceToken.loc.merge(rightBraceToken.loc),
    }
  }
}
