import { CappedRule } from '../../../abstracts'
import { StringLiteralToken } from '../../../types'
import { ILoc } from '../../../interfaces'
import { LocatedError } from '../../errors'

/*
 * UnterminatedStringLiteralError class.
 */
export class UnterminatedStringLiteralError extends LocatedError {
  name = 'UnterminatedStringLiteralError'
}

/*
 * StringLiteralRule class.
 */
export class StringLiteralRule extends CappedRule<StringLiteralToken> {
  constructor() {
    super([
      {
        start: '"',
        end: '"',
        allowNewLines: false,
        allowEscapes: true,
      },
      {
        start: "'",
        end: "'",
        allowNewLines: false,
        allowEscapes: true,
      },
    ])
  }

  createToken(value: string, loc: ILoc): StringLiteralToken {
    return {
      kind: 'string_literal',
      value,
      loc,
    }
  }

  createUnterminatedError(loc: ILoc): LocatedError {
    return new UnterminatedStringLiteralError(
      'unterminated string literal',
      loc
    )
  }
}
