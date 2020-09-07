import { SourceCode } from '../types'

/**
 * Transpiler interface.
 */
export interface ITranspiler {
  /**
   * Transpile given source code.
   *
   * @param input Source code.
   */
  transpile(input: SourceCode): SourceCode
}
