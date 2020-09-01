import { StatementNodeBase, Identifier } from '../..'
import { Expression } from '../Expression'

/**
 * ConstStatamenet type.
 */
export type ConstStatement = StatementNodeBase<'const_statement'> & {
  /**
   * Identifier.
   */
  identifier: Identifier

  /**
   * Initializer.
   */
  initializer: Expression
}
