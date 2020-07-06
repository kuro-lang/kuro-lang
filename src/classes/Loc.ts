import { ILoc } from '../interfaces'

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
}
