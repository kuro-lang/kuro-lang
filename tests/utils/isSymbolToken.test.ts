import { isSymbolToken } from '../../src/utils'
import { Loc } from '../../src'

describe('isSymbolToken', () => {
  test('should return whether passed argument is a symbol token.', () => {
    expect(
      isSymbolToken({
        kind: 'asterisk',
        loc: new Loc(0, 0),
      })
    ).toBeTruthy()

    expect(
      isSymbolToken({
        kind: 'while',
        loc: new Loc(0, 0),
      })
    ).toBeFalsy()
  })
})
