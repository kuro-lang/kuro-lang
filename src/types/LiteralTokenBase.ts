import { TokenBase } from './TokenBase'

/*
 * LiteralTokenBase type.
 */
export type LiteralTokenBase<K extends string> = TokenBase<K> & {
  /**
   * Value.
   */
  value: T
}
