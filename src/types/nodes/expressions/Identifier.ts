import { ExpressionNodeBase } from '../..'

/**
 * Identifier node.
 */
export type Identifier = ExpressionNodeBase<'Identifier'> & {
  identifier: string
}
