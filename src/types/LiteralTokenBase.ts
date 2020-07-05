import { TokenBase } from './TokenBase'

/*
 * LiteralTokenBase type.
 */
export type LiteralTokenBase<K extends string, T> = TokenBase<K> & {
  /**
   * Value.
   */
  value: T
}
