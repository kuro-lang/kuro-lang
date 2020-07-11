import { CappedRule } from '../../../abstracts'
import { BlockCommentToken } from '../../../types'
import { ILoc } from '../../../interfaces'
import { LocatedError } from '../..'

/*
 * UnterminatedBlockCommentError class.
 */
export class UnterminatedBlockCommentError extends LocatedError {
  name = 'UnterminatedBlockCommentError'
}

/*
 * BlockCommentRule class.
 */
export class BlockCommentRule extends CappedRule<BlockCommentToken> {
  constructor() {
    super([
      {
        start: '/*',
        end: '*/',
      },
    ])
  }

  createToken(content: string, loc: ILoc): BlockCommentToken {
    return {
      kind: 'block_comment',
      content,
      loc,
    }
  }

  createUnterminatedError(loc: ILoc): UnterminatedBlockCommentError {
    return new UnterminatedBlockCommentError('unterminated block comment', loc)
  }
}
