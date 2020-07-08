import { IWalker, WalkerPattern } from '../interfaces'
import { Loc } from './Loc'

/*
 * Walker class.
 */
export class Walker<T> implements IWalker<T> {
  /**
   * Current index.
   */
  private mIndex = 0

  /**
   * Values.
   */
  private mValues: T[]

  /**
   * Walker constructor.
   * @param values Values array.
   * @param initialIndex Initial index.
   */
  constructor(values: T[], initialIndex?: number)

  /**
   * Walker constructor.
   *
   * @param values Values iterator.
   * @param initialIndex Initial index.
   */
  constructor(values: Iterable<T>, initialIndex?: number)

  /**
   * Walker constructor.
   *
   * @param values Values.
   * @param initialIndex Initial index.
   */
  constructor(values: T[] | Iterable<T>, initialIndex = 0) {
    this.mValues = [...values]
    this.mIndex = initialIndex
  }

  index(): number {
    return this.mIndex
  }

  value(): T {
    return this.mValues[this.mIndex]
  }

  next(steps = 1): T | void {
    this.mIndex += steps

    return this.mValues[this.mIndex]
  }

  peek(steps = 1): T | void {
    return this.mValues[this.mIndex + steps]
  }

  match(patterns: Iterable<WalkerPattern<T>>): boolean {
    let index = this.mIndex

    for (const pattern of patterns) {
      if (pattern !== this.mValues[index]) {
        return false
      }

      ++index
    }

    return true
  }

  done(): boolean {
    return this.mIndex >= this.mValues.length
  }

  locTo(steps: number): Loc {
    return new Loc(this.index(), this.index() + steps)
  }

  locFrom(start: number): Loc {
    return new Loc(start, this.index())
  }

  slice(start: number, end: number): T[] {
    return this.mValues.slice(start, end)
  }

  sliceFrom(start: number): T[] {
    return this.mValues.slice(start, this.index())
  }
}
