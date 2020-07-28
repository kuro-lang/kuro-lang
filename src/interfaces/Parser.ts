import { ILexer } from './Lexer'
import { Node } from '../types'

/**
 * Parser interface.
 */
export interface IParser<T extends Node> {
  /**
   * Parse code of lexer. And returns AST Node.
   *
   * @param lexer Lexer.
   */
  parse(lexer: ILexer): T
}
