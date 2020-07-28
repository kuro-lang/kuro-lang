import { Node, TokenWalker } from '../types'

/**
 * Parser interface.
 */
export interface IParser<T extends Node> {
  /**
   * Parse token of walker. And returns AST node object.
   *
   * @param walker TokenWalker.
   */
  parse(walker: TokenWalker): T
}
