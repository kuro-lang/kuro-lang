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
    const isValidPrefix = this.prefix.test(walker.value())

    if (!isValidPrefix) {
      return false
    }

    const ignoreMatch = this.ignore.find((i) => walker.match(i))

    if (!ignoreMatch) {
      return true
    }

    const nextChar = walker
      .slice(
        walker.index() + ignoreMatch.length,
        walker.index() + ignoreMatch.length + 1
      )
      .join()

    return this.identifierChar.test(nextChar)
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
