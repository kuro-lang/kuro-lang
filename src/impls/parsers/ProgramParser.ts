import { Parser, Program, TokenWalker, Statement } from '../..'
import { injectable } from 'inversify'
import { Loc } from '../../classes'
import { loop } from '../../utils'
import { injectParser } from './parserContainer'
import { ParserToken } from '../../types'
import { IParser } from '../../interfaces'

/**
 * ProgramParser class.
 */
@injectable()
export class ProgramParser extends Parser<Program> {
  /**
   * StatementsParser.
   */
  @injectParser(ParserToken.Statements) statements: IParser<Statement>

  parse(walker: TokenWalker): Program {
    const { source } = walker
    const statements: Statement[] = []

    loop(({ end }) => {
      const peek = this.forwardToPrimaryToken(walker)

      if (!peek || peek.kind === 'end_of_file') {
        return end()
      }

      statements.push(this.statements.parse(walker))
    })

    return {
      kind: 'program',
      source,
      statements,
      loc: Loc.fromCollection(statements, ({ loc }) => loc),
    }
  }
}
