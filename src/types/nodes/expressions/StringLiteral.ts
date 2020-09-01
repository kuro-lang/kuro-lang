import { ExpressionNodeBase } from '../..'

/**
 * StringLiteral type.
 */
export type StringLiteral = ExpressionNodeBase<'string_literal'> & {
  /**
   * Value.
   */
  value: string
}
