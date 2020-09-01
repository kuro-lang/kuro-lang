import { Node } from '../types'
import { TokenWalker } from '../classes'

/**
 * Parser interface.
 */
export interface IParser<N extends Node> {
  /**
   * Parse node.
   *
   * @param walker TokenWalker.
   */
  parse(walker: TokenWalker): N
}
