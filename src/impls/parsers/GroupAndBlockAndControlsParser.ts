import { Parser } from '../..'
import { injectable, inject } from 'tsyringe'
import {
  ParserToken,
  SourceCode,
  TokenWalker,
  Node,
  Statement,
  Expression,
  BlockExpression,
  IfExpression,
} from '../../types'
import { IParser } from '../../interfaces'
import { loop } from '../../utils'
import { Loc } from '../../classes'

/**
 * GroupAndBlockAndControlsParser class.
 */
@injectable()
export class GroupAndBlockAndControlsParser extends Parser {
  /**
   * GroupAndBlockAndControlsParser constructor.
   *
   * @param expressions ExpressionsParser.
   * @param propertyAccessAndElementAccessAndFunctionCall PropertyAccessAndElementAccessAndFunctionCallParser.
   * @param statements StatementsParser.
   */
  constructor(
    @inject(ParserToken.Expressions) protected expressions: IParser<Expression>,
    @inject(ParserToken.PropertyAccessAndElementAccessAndFunctionCall)
    protected propertyAccessAndElementAccessAndFunctionCall: IParser,
    @inject(ParserToken.Statements) protected statements: IParser<Statement>
  ) {
    super()
  }

  parse(source: SourceCode, walker: TokenWalker): Node {
    const peek = walker.peek()

    if (!peek) {
      throw this.createPeekError(source, walker)
    }

    if (peek.kind === 'left_paren') {
      walker.next()
      const node = this.expressions.parse(source, walker)
      const token = walker.value()

      if (token.kind === 'right_paren') {
        return node
      }

      throw this.createUnexpectedError(source, token.loc)
    }

    if (peek.kind === 'left_brace') {
      return this.parseBlockExpression(source, walker)
    }

    if (peek.kind === 'if') {
      return this.parseIfExpression(source, walker)
    }
  }

  /**
   * Parse if expression.
   *
   * @param source SourceCode object.
   * @param walker Token walker.
   */
  protected parseIfExpression(
    source: SourceCode,
    walker: TokenWalker
  ): IfExpression {
    const ifToken = walker.next()

    if (!ifToken) {
      throw this.createPeekError(source, walker)
    }

    const condition = this.expressions.parse(source, walker)
    const thenExpression = this.parseBlockExpression(source, walker)

    const peek = walker.peek()

    if (!peek) {
      throw this.createPeekError(source, walker)
    }

    if (peek.kind === 'else') {
      walker.next()
      const elseExpression = this.expressions.parse(source, walker)

      if (
        elseExpression.kind === 'if_expression' ||
        elseExpression.kind === 'block_expression'
      ) {
        return {
          kind: 'if_expression',
          condition,
          then: thenExpression,
          else: elseExpression,
          loc: ifToken.loc.merge(elseExpression.loc),
        }
      }
    }

    return {
      kind: 'if_expression',
      condition,
      then: thenExpression,
      loc: ifToken.loc.merge(thenExpression.loc),
    }
  }

  /**
   * Parse block expression.
   *
   * @param source SourceCode object.
   * @param walker Token walker.
   */
  protected parseBlockExpression(
    source: SourceCode,
    walker: TokenWalker
  ): BlockExpression {
    walker.next()
    const statements: Statement[] = []

    loop(({ end }) => {
      const peek = walker.peek()

      if (!peek) {
        throw this.createPeekError(source, walker)
      }

      if (peek.kind === 'right_brace') {
        end()
      }

      if (peek.kind === 'new_line') {
        walker.next()
      }

      const statement = this.statements.parse(source, walker)
      statements.push(statement)
    })

    return {
      kind: 'block_expression',
      statements,
      loc: Loc.fromCollection(statements, ({ loc }) => loc),
    }
  }
}
