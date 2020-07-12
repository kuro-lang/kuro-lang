import { ILexerRule, IWalker, ILoc } from '../../interfaces'
import { Token } from '../../types'
import { LocatedError } from '../../impls'
import { useEquals } from '../../utils'

/*
 * Cap type.
 */
export type Cap = {
  /**
   * Start cap.
   */
  start: string

  /**
   * End cap.
   */
  end: string

  /**
   * Whether allow new lines.
   */
  allowNewLines: boolean

  /**
   * Whether allow escapes.
   */
  allowEscapes: boolean
}

/*
 * CappedRule class.
 */
export abstract class CappedRule<T extends Token> implements ILexerRule {
  /**
   * Caps.
   */
  readonly caps: Cap[] = []

  /**
   * Escape chars.
   */
  readonly escapes = ['\\']

  /**
   * CappedRule constructor.
   *
   * @param caps Caps.
   */
  constructor(caps: Cap[]) {
    this.caps = caps
  }

  validate(walker: IWalker<string>): boolean {
    return !!this.getCap(walker)
  }

  execute(walker: IWalker<string>): T {
    const cap = this.getCap(walker)
    const start = walker.index()

    let escape = false
    let body = ''

    walker.next(cap.start.length)

    while (true as const) {
      if (walker.done() || (walker.value() === '\n' && !cap.allowNewLines)) {
        throw this.createUnterminatedError(walker.locFrom(start))
      } else if (walker.match(cap.end) && !escape) {
        walker.next(cap.end.length)
        break
      } else if (cap.allowEscapes && this.isEscape(walker.value())) {
        escape = !escape
      } else {
        body += walker.value()
        escape = false
      }

      walker.next()
    }

    return this.createToken(body, walker.locFrom(start))
  }

  /**
   * If there's a corresponding cap in Walker, returns it.
   *
   * @param walker Walker.
   */
  protected getCap(walker: IWalker<string>): Cap {
    return this.caps.find((cap) => walker.match(cap.start))
  }

  /**
   * Returns whether char is a escape cahr.
   *
   * @param char Char.
   */
  protected isEscape(char: string): boolean {
    return !!this.escapes.find(useEquals(char))
  }

  /**
   * Returns a token by body string and returns it.
   *
   * @param body Body string.
   * @param loc Token location.
   */
  abstract createToken(body: string, loc: ILoc): T

  /**
   * Returns an unterminated error.
   *
   * @param loc Error location.
   */
  abstract createUnterminatedError(loc: ILoc): LocatedError
}
