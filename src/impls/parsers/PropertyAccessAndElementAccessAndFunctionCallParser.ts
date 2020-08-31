import { Parser } from '../..'
import {
  SourceCode,
  TokenWalker,
  Node,
  ParserToken,
  Expression,
  Identifier,
} from '../../types'
import { injectable } from 'inversify'
import { IParser } from '../../interfaces'
import { loop } from '../../utils'
import { injectParser } from './parserContainer'

/**
 * PropertyAccessAndElementAccessAndFunctionCallParser class.
 */
@injectable()
export class PropertyAccessAndElementAccessAndFunctionCallParser extends Parser {
  @injectParser(ParserToken.GroupAndBlockAndControls)
  protected groupAndBlockAndControls: IParser<Expression>

  @injectParser(ParserToken.Expressions) protected expressions: IParser<
    Expression
  >

  parse(source: SourceCode, walker: TokenWalker): Node {
    const peek = walker.peek()

    if (!peek) {
      throw this.createPeekError(source, walker)
    }

    if (peek.kind === 'dot') {
      const expression = this.expressions.parse(source, walker)
      const dotToken = walker.next()

      if (!dotToken) {
        throw this.createPeekError(source, walker)
      }

      const identifierToken = walker.next()

      if (!identifierToken) {
        throw this.createPeekError(source, walker)
      }

      if (identifierToken.kind !== 'identifier') {
        throw this.createUnexpectedError(
          source,
          identifierToken.loc,
          'identifier'
        )
      }

      const identifier: Identifier = identifierToken

      return {
        kind: 'property_access_expression',
        expression,
        identifier,
        loc: expression.loc.merge(identifier.loc),
      }
    }

    if (peek.kind === 'left_bracket') {
      const expression = this.expressions.parse(source, walker)
      const leftBracketToken = walker.next()

      if (!leftBracketToken) {
        throw this.createPeekError(source, walker)
      }

      if (leftBracketToken.kind !== 'left_bracket') {
        throw this.createUnexpectedError(source, leftBracketToken.loc, '[')
      }

      const index = this.expressions.parse(source, walker)

      const rightBracketToken = walker.next()

      if (!rightBracketToken) {
        throw this.createPeekError(source, walker)
      }

      if (rightBracketToken.kind !== 'right_bracket') {
        throw this.createUnexpectedError(source, rightBracketToken.loc, ']')
      }

      return {
        kind: 'element_access_expression',
        expression,
        index,
        loc: expression.loc.merge(rightBracketToken.loc),
      }
    }

    return this.groupAndBlockAndControls.parse(source, walker)
  }
}
