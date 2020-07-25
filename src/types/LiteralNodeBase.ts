import { NodeBase } from '.'

/**
 * LiteralNodeBase type.
 */
export type LiteralNodeBase<K extends string, T> = NodeBase<K> & {
  /**
   * Value.
   */
  value: T
}
