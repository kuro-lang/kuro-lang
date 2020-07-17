import { ILexerRule, IWalker } from '../../../interfaces'
import { NumericLiteralToken } from '../../../types'
import { UnexpectedTokenError } from '../../errors'

/*
 * NumericLiteralRule class.
 */
export class NumericLiteralRule implements ILexerRule {
  validate(walker: IWalker<string>): boolean {
    return this.isNumberChar(walker.value())
  }

  execute(walker: IWalker<string>): NumericLiteralToken {
    const start = walker.index()
    let hasDecimalPoint = false

    while (
      !walker.done() &&
      (this.isNumberChar(walker.value()) ||
        this.isDecimalPointChar(walker.value()))
    ) {
      if (this.isDecimalPointChar(walker.value())) {
        if (hasDecimalPoint) {
          throw new UnexpectedTokenError(
            `unexpected token '${walker.value()}'`,
            walker.locTo(walker.index() + 1)
          )
        } else {
          hasDecimalPoint = true
        }
      }

      walker.next()
    }

    return {
      kind: 'numeric_literal',
      value: Number(walker.sliceFrom(start).join('')),
      loc: walker.locFrom(start),
    }
  }

  /**
   * Returns whether char is a number char.
   *
   * @param char Char.
   */
  protected isNumberChar(char: string): boolean {
    return /[0-9]/.test(char)
  }

  /**
   * Returns whether char is a decimal point char.
   * @param char Char.
   */
  protected isDecimalPointChar(char: string): boolean {
    return char === '.'
  }
}
