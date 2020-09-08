import { ILexerRule, IWalker } from '../../interfaces'
import { IdentifierToken } from '../../types'

/*
 * IdentifierRule class.
 */
export class IdentifierRule implements ILexerRule {
  /**
   * Identifier prefix regexp.
   */
  prefix = /[a-zA-Z]|_/

  /**
   * Identifier char regexp.
   */
  identifierChar = /[a-zA-Z0-9]|_/

  /**
   * Ignore strings.
   */
  ignore: string[] = []

  /**
   * IdentifierRule constructor.
   *
   * @param ignore Ignore strings.
   */
  constructor(ignore: string[] = []) {
    this.ignore = ignore
  }

  validate(walker: IWalker<string>): boolean {
    return (
      this.prefix.test(walker.value()) &&
      this.ignore.some((s) => {
        if (!walker.match(s)) {
          return false
        }

        const sliced = walker.slice(
          walker.index() + s.length,
          walker.index() + s.length + 1
        )

        const nextChar = sliced.join()

        return this.identifierChar.test(nextChar)
      })
    )
  }

  execute(walker: IWalker<string>): IdentifierToken {
    const start = walker.index()

    while (!walker.done() && this.identifierChar.test(walker.value())) {
      walker.next()
    }

    return {
      kind: 'identifier',
      identifier: walker.sliceFrom(start).join(''),
      loc: walker.locFrom(start),
    }
  }
}
