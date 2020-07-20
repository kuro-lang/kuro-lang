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

  validate(walker: IWalker<string>): boolean {
    return this.prefix.test(walker.value())
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
