import { ILexer } from './Lexer'
import { SourceCode } from '../types'

/*
 * Highlihter interface.
 */
export interface IHighlighter {
  /**
   * Returns highlighted source code by given lexer.
   *
   * @param SourceCode Source code object.
   * @param lexer lexer.
   */
  highlight(source: SourceCode, lexer: ILexer): void
}
