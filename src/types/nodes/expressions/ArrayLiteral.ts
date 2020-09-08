import { ExpressionNodeBase } from '../..'
import { Expression } from '../Expression'

/**
 * ArrayLiteral type.
 */
export type ArrayLiteral = ExpressionNodeBase<'array_literal'> & {
  /**
   * Elements.
   */
  elements: Expression[]
}
