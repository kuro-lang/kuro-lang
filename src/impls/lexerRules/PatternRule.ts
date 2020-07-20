import { ILexerRule, IWalker } from '../../interfaces'
import { PureToken, PureTokenKind } from '../../types'

/*
 * Pattern type.
 */
export type Pattern = {
  /**
   * Pattern string.
   */
  pattern: string

  /**
   * Token kind.
   */
  kind: PureTokenKind
}

/*
 * PatternMaker function type.
 */
export type PatternMaker = (pattern: string, kind: PureTokenKind) => Pattern

/**
 * Returns pattern by given pattern and given kind.
 *
 * @param pattern Pattern string.
 * @param kind Token kind.
 */
export const makePattern: PatternMaker = (
  pattern: string,
  kind: PureTokenKind
): Pattern => ({
  pattern,
  kind,
})

/*
 * PatternRule class.
 */
export class PatternRule implements ILexerRule {
  /**
   * Patterns array.
   */
  readonly patterns: Pattern[]

  /**
   * PatternRule constructor.
   *
   * @param patterns Patterns array.
   */
  constructor(patternsMaker: (makePattern: PatternMaker) => Pattern[]) {
    this.patterns = patternsMaker(
      makePattern
    ).sort(({ pattern: a }, { pattern: b }) => (a.length < b.length ? 1 : -1))
  }

  validate(walker: IWalker<string>): boolean {
    return !!this.getPattern(walker)
  }

  execute(walker: IWalker<string>): PureToken {
    const { kind, pattern } = this.getPattern(walker)
    const start = walker.index()

    walker.next(pattern.length)

    return {
      kind,
      loc: walker.locFrom(start),
    } as PureToken
  }

  /**
   * Returns pattern by given walker.
   *
   * @param walker Source walker.
   */
  getPattern(walker: IWalker<string>): Pattern {
    return this.patterns.find(({ pattern }) => walker.match(pattern))
  }
}
