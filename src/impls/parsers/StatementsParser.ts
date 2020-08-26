import { Parser } from '../..'
import { injectable } from 'inversify'
import {
  SourceCode,
  TokenWalker,
  Statement,
  ParserToken,
  Expression,
} from '../../types'
import { IParser } from '../../interfaces'
import { injectParser } from './parserContainer'

/**
 * StatementsParser class.
 */
@injectable()
export class StatementsParser extends Parser {
  @injectParser(ParserToken.Expressions) protected expressions: IParser<
    Expression
  >

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
