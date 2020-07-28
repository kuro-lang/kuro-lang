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
}
