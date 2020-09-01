import { Token, SourceCode } from '../types'
import { IWalker } from './Walker'
import { TokenWalker } from '../classes'

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

  /**
   * Convert lexer to TokenWalker instance.
   *
   * @param source SourceCode object.
   */
  toTokenWalker(source: SourceCode): TokenWalker
}
