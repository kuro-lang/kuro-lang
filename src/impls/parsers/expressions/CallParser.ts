import { injectable } from 'inversify'
import { injectParser } from '../parserContainer'
import { ParserToken, Expression } from '../../../types'
import { IParser } from '../../../interfaces'
import { TokenWalker } from '../../../classes'
import { loop } from '../../../utils'
import { Parser } from '../../../abstracts'

/**
 * CallParser class.
 */
@injectable()
export class CallParser extends Parser<Expression> {
  /**
   * GroupParser.
   */
  @injectParser(ParserToken.Group) group: IParser<Expression>

  /**
   * ExpressionsParser.
   */
  @injectParser(ParserToken.Expressions) expressions: IParser<Expression>

  parse(walker: TokenWalker): Expression {
    let expression = this.group.parse(walker)

    return loop(({ end }) => {
      const peek = walker.peek()

      if (!peek) {
        return end(expression)
      }

      if (peek.kind === 'left_paren') {
        walker.next()
        const args = this.parseArguments(walker)
        const rightParen = walker.value()

        expression = {
          kind: 'call_expression',
          expression,
          arguments: args,
          loc: peek.loc.merge(rightParen.loc),
        }
      } else {
        return end(expression)
      }
    })
  }

  /**
   * Parse function call arguments.
   *
   * @param walker Token walker.
   */
  protected parseArguments(walker: TokenWalker): Expression[] {
    const args: Expression[] = []
    const leftParen = walker.value()

    if (!leftParen) {
      throw this.createPeekError(walker)
    }

    let token: ReturnType<typeof walker.next>
    do {
      const arg = this.expressions.parse(walker)
      args.push(arg)

      token = walker.next()
    } while (token && token.kind === 'comma')

    if (!token) {
      throw this.createPeekError(walker)
    }

    if (token.kind !== 'right_paren') {
      throw this.createUnexpectedError(token, walker, ')')
    }

    return args
  }
}
