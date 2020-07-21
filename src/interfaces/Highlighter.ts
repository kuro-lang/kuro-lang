import { ILexer } from './Lexer'

/*
 * Highlihter interface.
 */
export interface IHighlighter {
  /**
   * Returns highlighted source code by given lexer.
   *
   * @param lexer lexer.
   */
  highlight(lexer: ILexer): string
}
