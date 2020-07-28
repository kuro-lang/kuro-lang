import { Expression, Statement } from '.'
import { Identifier, Parameter, PropertyAssignment, Root } from './nodes'

/**
 * AST Node type.
 */
export type Node =
  | Expression
  | Statement
  | Identifier
  | Parameter
  | PropertyAssignment
  | Root
