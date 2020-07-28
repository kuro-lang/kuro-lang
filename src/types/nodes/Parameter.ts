import { NodeBase } from '..'
import { Identifier } from './Identifier'

/**
 * Parameter type.
 */
export type Parameter = NodeBase<'parameter'> & {
  /**
   * Name node.
   */
  name: Identifier
}
