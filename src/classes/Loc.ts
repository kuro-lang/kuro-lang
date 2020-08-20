import { ILoc } from '../interfaces'
import { Sliceable } from '../types'

/*
 * Loc class.
 */
export class Loc implements ILoc {
  /**
   * Loc constructor.
   *
   * @param start Start location.
   * @param end End location.
   */
  constructor(public start: number, public end: number) {}

  slice<T>(sliceable: Sliceable<T>): T {
    return sliceable.slice(this.start, this.end)
  }

  merge(loc: ILoc): Loc {
    const start = Math.min(this.start, loc.start)
    const end = Math.max(this.end, loc.end)

    return new Loc(start, end)
  }

  /**
   * Returns Loc object by given start and given length.
   *
   * @param start Start location.
   * @param length Location length from start.
   */
  static fromStart(start: number, length = 1): Loc {
    return new Loc(start, start + length)
  }

  /**
   * Returns Loc object by given collection and given loc getter.
   *
   * @param collection Collection.
   * @param getLoc Loc getter.
   */
  static fromCollection<T>(collection: T[], getLoc: (item: T) => ILoc): Loc {
    return collection.reduce(
      (loc, item) => loc.merge(getLoc(item)),
      new Loc(0, 0)
    )
  }
}
