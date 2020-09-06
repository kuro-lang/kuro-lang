import { ExpressionNodeBase } from '../..'

/**
 * Identifier node.
 */
export type Identifier = ExpressionNodeBase<'identifier'> & {
  /**
   * Identifier string.
   */
  identifier: string
}
