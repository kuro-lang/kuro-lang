import { StatementNodeBase } from '../..'
import { Identifier } from '../expressions'
import { Expression } from '../Expression'

/**
 * LetStatement type.
 */
export type LetStatement = StatementNodeBase<'let_statement'> & {
  /**
   * Identifier.
   */
  identifier: Identifier

  /**
   * Initializer.
   */
  initializer?: Expression
}
