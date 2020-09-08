import { ExpressionNodeBase } from '../..'
import { Identifier } from './Identifier'
import { Expression } from '../Expression'

/**
 * ObjectProperty type.
 */
export type ObjectProperty = {
  /**
   * Identifier.
   */
  identifier: Identifier

  /**
   * Initializer.
   */
  initializer: Expression
}

/**
 * ObjectLiteral type.
 */
export type ObjectLiteral = ExpressionNodeBase<'object_literal'> & {
  /**
   * Properties.
   */
  properties: ObjectProperty[]
}
