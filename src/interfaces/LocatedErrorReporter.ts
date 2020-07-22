import { LocatedError } from '../impls'

/*
 * LocatedErrorReporter interface.
 */
export interface ILocatedErrorReporter {
  /**
   * Report the located error.
   *
   * @param error Located error.
   */
  report(error: LocatedError): void
}
