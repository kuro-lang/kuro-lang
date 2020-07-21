import { Token } from '../types'
import { IWalker } from './Walker'

/*
 * Lexer interface.
 */
export interface ILexer extends IWalker<string> {
  /**
   * Returns next token.
   */
  nextToken(): string | Token
}
