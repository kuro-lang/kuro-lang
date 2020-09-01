import { ExpressionNodeBase } from '../..'

/**
 * Identifier node.
 */
export type Identifier = ExpressionNodeBase<'identifier'> & {
  identifier: string
}
