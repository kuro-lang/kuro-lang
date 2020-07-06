import { Token, CommentToken, CommentTokenKind } from '../types'
import { isTokenKind } from './isTokenKind'

/**
 * Comment tokens kinds array.
 */
const commentKinds: CommentTokenKind[] = ['block_comment', 'inline_comment']

/**
 * Returns whether token is a CommentToken.
 *
 * @param token Token.
 */
export const isCommentToken = (token: Token): token is CommentToken => {
  return isTokenKind(token, commentKinds)
}
