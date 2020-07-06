import { TokenBase } from './TokenBase'

/*
 * CommentTokenBase type.
 */
export type CommentTokenBase<K extends string> = TokenBase<K> & {
  /**
   * Content.
   */
  content: string
}
