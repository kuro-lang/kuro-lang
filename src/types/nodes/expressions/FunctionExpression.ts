import { ExpressionNodeBase } from '../..'
import { Identifier } from './Identifier'
import { BlockStatement } from '../statements'

/**
 * FunctionParameter type.
 */
export type FunctionParameter = {
  /**
   * Identifier.
   */
  identifier: Identifier
}

/**
 * FunctionExpression type.
 */
export type FunctionExpression = ExpressionNodeBase<'function_expression'> & {
  /**
   * Identifier.
   */
  identifier?: Identifier

  /**
   * Parameters.
   */
  parameters?: FunctionParameter[]

  /**
   * Statement.
   */
  statement: BlockStatement
}
