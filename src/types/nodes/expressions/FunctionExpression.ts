import { ExpressionNodeBase } from '../..'
import { Identifier } from './Identifier'
import { BlockStatement } from '../statements'
import { AsyncToken } from '../../tokens'

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
   * Async token.
   */
  async?: AsyncToken

  /**
   * Identifier.
   */
  identifier?: Identifier

  /**
   * Parameters.
   */
  parameters: FunctionParameter[]

  /**
   * Statement.
   */
  body: BlockStatement
}
