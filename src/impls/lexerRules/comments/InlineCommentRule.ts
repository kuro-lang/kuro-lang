import { ILexerRule, IWalker } from '../../../interfaces'
import { InlineCommentToken } from '../../../types'

/*
 * InlineCommentRule class.
 */
export class InlineCommentRule implements ILexerRule {
  /**
   * Prefixes.
   */
  readonly prefixes = ['//']

  validate(walker: IWalker<string>): boolean {
    return !!this.getPrefix(walker)
  }

  execute(walker: IWalker<string>): InlineCommentToken {
    const prefix = this.getPrefix(walker)
    const start = walker.index()
    const commentStart = start + prefix.length

    walker.next(prefix.length)

    while (!walker.done() && walker.value() !== '\n') {
      walker.next()
    }

    return {
      kind: 'inline_comment',
      content: walker.sliceFrom(commentStart).join(''),
      loc: walker.locFrom(start),
    }
  }

  /**
   * If there's a corresponding prefix in Walker, returns it.
   *
   * @param walker Walker.
   */
  protected getPrefix(walker: IWalker<string>): string {
    return this.prefixes.find((p) => walker.match(p))
  }
}
