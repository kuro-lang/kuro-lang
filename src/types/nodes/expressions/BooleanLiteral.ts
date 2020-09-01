import { ExpressionNodeBase } from '../..'

/**
 * BooleanLiteral type.
 */
export type BooleanLiteral = ExpressionNodeBase<'boolean_literal'> & {
  /**
   * Value.
   */
  value: boolean
}
