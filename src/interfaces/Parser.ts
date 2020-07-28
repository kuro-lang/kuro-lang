import { ILexer } from './Lexer'
import { Root } from '../types'

/**
 * Parser interface.
 */
export interface IParser {
  /**
   * Parse code of lexer. And returns Root AST Node.
   *
   * @param lexer Lexer.
   */
  parse(lexer: ILexer): Root
}
