import { NodeBase } from '../..'
import { Expression } from '../Expression'

/**
 * BreakStatement type.
 */
export type BreakStatement = NodeBase<'break_statement'> & {
  /**
   * Expression node.
   */
  expression?: Expression
}
