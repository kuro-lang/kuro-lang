import { injectable } from 'inversify'
import { injectParser } from './parserContainer'
import { ParserToken, Expression, Identifier } from '../../types'
import { IParser } from '../../interfaces'
import { TokenWalker } from '../../classes'
import { loop } from '../../utils'
import { Parser } from '../../abstracts'

/**
 * CallAndAccessParser class.
 */
@injectable()
export class CallAndAccessParser extends Parser<Expression> {
  /**
   * AwaitParser.
   */
  @injectParser(ParserToken.Await) awaitParser: IParser<Expression>

  /**
   * ExpressionsParser.
   */
  @injectParser(ParserToken.Expressions) expressions: IParser<Expression>

  parse(walker: TokenWalker): Expression {
    let expression = this.awaitParser.parse(walker)

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
      } else if (peek.kind == 'dot') {
        walker.next()
        const identifierToken = walker.next()

        if (!identifierToken) {
          throw this.createPeekError(walker)
        }

        if (identifierToken.kind !== 'identifier') {
          throw this.createUnexpectedError(
            identifierToken,
            walker,
            'identifier'
          )
        }

        const identifier: Identifier = {
          ...identifierToken,
        }

        expression = {
          kind: 'property_access_expression',
          expression,
          identifier,
          loc: peek.loc.merge(identifier.loc),
        }
      } else if (peek.kind === 'left_bracket') {
        walker.next()
        const index = this.expressions.parse(walker)
        const rightBracket = walker.next()

        if (!rightBracket) {
          throw this.createPeekError(walker)
        }

        if (rightBracket.kind !== 'right_bracket') {
          throw this.createUnexpectedError(rightBracket, walker, ']')
        }

        expression = {
          kind: 'element_access_expression',
          expression,
          index,
          loc: peek.loc.merge(rightBracket.loc),
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

    if (leftParen.kind !== 'left_paren') {
      throw this.createUnexpectedError(leftParen, walker, '(')
    }

    let token = this.forwardToPrimaryToken(walker)

    if (token && token.kind === 'right_paren') {
      walker.next()
      return args
    }

    loop(({ end }) => {
      const expression = this.expressions.parse(walker)

      args.push(expression)

      token = this.forwardToPrimaryToken(walker)
      if (!token || token.kind !== 'comma') {
        return end()
      }

      walker.next()
      this.forwardToPrimaryToken(walker)
    })

    if (!token) {
      throw this.createPeekError(walker)
    }

    if (token.kind !== 'right_paren') {
      throw this.createUnexpectedError(token, walker, ')')
    }

    walker.next()

    return args
  }
}
