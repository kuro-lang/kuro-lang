import { LocatedError } from '../impls'
import { SourceCode } from '../types'

/*
 * LocatedErrorReporter interface.
 */
export interface ILocatedErrorReporter {
  /**
   * Report the located error.
   *
   * @param source SourceCode object.
   * @param error Located error.
   */
  report(source: SourceCode, error: LocatedError): void
}
