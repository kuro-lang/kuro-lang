import { Token } from '../types'

/*
 * Lexer interface.
 */
export interface ILexer {
  /**
   * Returns next token or string.
   */
  next(): Token | string

  /**
   * Returns whether analyzing is done.
   */
  done(): boolean
}
