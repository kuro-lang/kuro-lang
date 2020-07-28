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
}
