import { ExpressionNodeBase } from '../..'

/**
 * NumericLiteral type.
 */
export type NumericLiteral = ExpressionNodeBase<'numeric_literal'> & {
  /**
   * Value.
   */
  value: number
}
