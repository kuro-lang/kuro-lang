import { Sliceable } from '../types'

/*
 * Loc interface.
 */
export interface ILoc {
  /**
   * Start location.
   */
  start: number

  /**
   * End location.
   */
  end: number

  /**
   * Returns sliced object.
   *
   * @param sliceable Sliceable object.
   */
  slice<T>(sliceable: Sliceable<T>): T

  /**
   * Returns the merged loc object by given loc.
   *
   * @param loc Loc object.
   */
  merge(loc: ILoc): ILoc
}
