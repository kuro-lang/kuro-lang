import { NodeBase } from '..'
import { Identifier } from './Identifier'
import { Expression } from './Expression'

/**
 * PropertyAssignemnt type.
 */
export type PropertyAssignment = NodeBase<'property_assignment'> & {
  /**
   * Property name.
   */
  name: Identifier

  /**
   * Initializer expression.
   */
  initializer: Expression
}
