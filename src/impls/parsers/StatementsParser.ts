import { Parser } from '../..'
import { injectable, inject } from 'tsyringe'
import {
  SourceCode,
  TokenWalker,
  Statement,
  ParserToken,
  Expression,
} from '../../types'
import { IParser } from '../../interfaces'

/**
 * StatementsParser class.
 */
@injectable()
export class StatementsParser extends Parser {
  /**
   * StatementParser constructor.
   *
   * @param expressions ExpressionsParser.
   */
  constructor(
    @inject(ParserToken.Expressions) protected expressions: IParser<Expression>
  ) {
    super()
  }

  parse(source: SourceCode, walker: TokenWalker): Statement {
    const peek = walker.peek()

    if (!peek) {
      throw this.createPeekError(source, walker)
    }

    if (peek.kind === 'break') {
      walker.next()
      return {
        ...peek,
        kind: 'break_statement',
      }
    }

    if (peek.kind === 'continue') {
      walker.next()
      return {
        ...peek,
        kind: 'continue_statement',
      }
    }

    const expression = this.expressions.parse(source, walker)
    return {
      kind: 'expression_statement',
      expression,
      loc: expression.loc,
    }
  }
}
