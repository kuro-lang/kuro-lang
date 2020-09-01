import { Token } from '../types'
import { IWalker } from './Walker'

/*
 * Lexer interface.
 */
export interface ILexer extends IWalker<string>, Iterable<string | Token> {
  /**
   * Returns next token.
   */
  nextToken(): string | Token

  /**
   * Returns a iterator of token and string.
   */
  [Symbol.iterator](): Iterator<Token | string>
}
