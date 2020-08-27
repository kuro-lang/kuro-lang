import { IParser } from '../..'
import { SourceCode, TokenWalker, Node } from '../../types'
import { LocatedError } from '../../impls'
import { ILoc } from '../../interfaces'
import { injectable } from 'inversify'

/**
 * Parser abstract class.
 */
@injectable()
export abstract class Parser implements IParser {
  abstract parse(source: SourceCode, walker: TokenWalker): Node

  /**
   * Returns a LocatedError object that has a message of peek error.
   *
   * @param source SourceCode object.
   * @param walker Token walker.
   */
  protected createPeekError(
    source: SourceCode,
    walker: TokenWalker
  ): LocatedError {
    return new LocatedError(`peek error`, walker.locTo(-1))
  }

  /**
   * Returns a LocatedError object that has a message of unexpected error.
   *
   * @param source SourceCode object.
   * @param loc Token walker.
   * @param expected Expected token kind.
   */
  protected createUnexpectedError(
    source: SourceCode,
    loc: ILoc,
    expected?: string
  ): LocatedError {
    const got = loc.slice(source.code) || 'end of file'

    if (expected) {
      return new LocatedError(`expected ${expected}, but got ${got} `, loc)
    }

    return new LocatedError(`unexpected token ${got} `, loc)
  }
}
