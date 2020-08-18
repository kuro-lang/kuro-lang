import { ILoc } from './Loc'

/*
 * WalkerPatternFn type.
 */
export type WalkerPatternFn<T> = (value: T) => boolean

/*
 * WalkerPattern type.
 */
export type WalkerPattern<T> = T | WalkerPatternFn<T>

/*
 * Walker interface.
 */
export interface IWalker<T> {
  /**
   * Returns current index.
   */
  index(): number

  /**
   * Set current index.
   */
  setIndex(index: number): this

  /**
   * Returns value.
   */
  value(): T

  /**
   * Forward index and returns value.
   *
   * @param steps Steps.
   */
  next(steps?: number): T | void

  /**
   * Returns value of the number of steps ahead.
   *
   * @param steps Steps.
   */
  peek(steps?: number): T | void

  /**
   * Returns whether next values matches patterns.
   *
   * @param patterns Patterns.
   */
  match(patterns: Iterable<WalkerPattern<T>>): boolean

  /**
   * Returns whether done walking.
   */
  done(): boolean

  /**
   * Returns location to steps.
   *
   * @param steps Steps.
   */
  locTo(steps: number): ILoc

  /**
   * Returns location from start.
   *
   * @param start Start.
   */
  locFrom(start: number): ILoc

  /**
   * Returns sliced values.
   *
   * @param start Start.
   * @param end End.
   */
  slice(start: number, end: number): T[]

  /**
   * Returns sliced values.
   *
   * @param start Start.
   */
  sliceFrom(start: number): T[]
}
