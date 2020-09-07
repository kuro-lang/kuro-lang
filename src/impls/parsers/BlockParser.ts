import { Parser, loop } from '../..'
import { injectParser } from './parserContainer'
import { ParserToken, BlockStatement, Statement } from '../../types'
import { IParser } from '../../interfaces'
import { TokenWalker } from '../../classes'
import { injectable } from 'inversify'

/**
 * BlockParser class.
 */
@injectable()
export class BlockParser extends Parser<BlockStatement> {
  /**
   * StatementParser.
   */
  @injectParser(ParserToken.Statements) statements: IParser<Statement>

  parse(walker: TokenWalker): BlockStatement {
    const leftBraceToken = walker.next()

    if (!leftBraceToken) {
      throw this.createPeekError(walker)
    }

    if (leftBraceToken.kind !== 'left_brace') {
      throw this.createUnexpectedError(leftBraceToken, walker, '{')
    }

    const statements: Statement[] = []

    loop(({ end }) => {
      const peek = this.forwardToPrimaryToken(walker)

      if (!peek) {
        throw this.createPeekError(walker)
      }

      if (peek.kind === 'right_brace') {
        return end()
      }

      const statement = this.statements.parse(walker)
      statements.push(statement)
    })

    const rightBraceToken = walker.next()

    if (!rightBraceToken) {
      throw this.createPeekError(walker)
    }

    if (rightBraceToken.kind !== 'right_brace') {
      throw this.createUnexpectedError(rightBraceToken, walker, '}')
    }

    return {
      kind: 'block_statement',
      body: statements,
      loc: leftBraceToken.loc.merge(rightBraceToken.loc),
    }
  }
}
