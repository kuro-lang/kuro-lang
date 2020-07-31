import { SourceCode } from '../types'

/**
 * Returns source code object that does not have the filename.
 *
 * @param code Source code.
 */
export function makeSource(code: string): SourceCode

/**
 * Returns source code object by given filename and given code.
 *
 * @param filename Source filename.
 * @param code Source code.
 */
export function makeSource(filename: string, code: string): SourceCode

/**
 * Returns source code object.
 *
 * @param args args.
 */
export function makeSource(...args: string[]): SourceCode {
  if (args.length === 1) {
    return {
      code: args[0],
    }
  }

  return {
    filename: args[0],
    code: args[1],
  }
}
