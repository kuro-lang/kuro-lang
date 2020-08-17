import { Node, TokenWalker, SourceCode } from '../types'

/**
 * Parser interface.
 */
export interface IParser<T extends Node> {
  /**
   * Parse token of walker. And returns AST node object.
   *
   * @param source SourceCode.
   * @param walker TokenWalker.
   */
  parse(source: SourceCode, walker: TokenWalker): T
}
