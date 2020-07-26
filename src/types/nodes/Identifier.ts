import { NodeBase } from '..'

/**
 * Identifier type.
 */
export type Identifier = NodeBase<'identifier'> & {
  /**
   * Identifier.
   */
  identifier: string
}
