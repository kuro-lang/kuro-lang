import { ILoc } from '../../interfaces'

/*
 * LocatedError class.
 */
export class LocatedError extends Error {
  /**
   * Error name.
   */
  name = 'LocatedError'

  /**
   * Location instance.
   */
  readonly loc: ILoc

  /**
   * LocatedError constructor.
   *
   * @param message Error message.
   * @param loc Location instance.
   */
  constructor(message: string, loc: ILoc) {
    super(message)
    this.loc = loc
  }
}
