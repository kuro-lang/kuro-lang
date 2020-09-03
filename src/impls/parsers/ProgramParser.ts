import { injectable } from 'inversify'
import {
  Parser,
  Program,
  ParserToken,
  IParser,
  Statement,
  TokenWalker,
  loop,
  Loc,
} from '../..'
import { injectParser } from '.'

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

      if (!peek) {
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
