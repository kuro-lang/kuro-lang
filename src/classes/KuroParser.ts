import { Program, SourceCode, ParserToken } from '../types'
import { Lexer } from './Lexer'
import { parserContainer } from '../impls'
import { IParser } from '../interfaces'

/**
 * KuroParser class.
 */
export class KuroParser {
  /**
   * Parse kuro program and return Program AST node.
   *
   * @param source Source code.
   */
  parse(source: SourceCode): Program {
    const lexer = new Lexer(source.code)
    const walker = lexer.toTokenWalker(source)
    const parser = parserContainer.get<IParser<Program>>(ParserToken.Program)

    const program = parser.parse(walker)

    return program
  }
}
