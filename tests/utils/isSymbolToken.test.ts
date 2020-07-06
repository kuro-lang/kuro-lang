import { isSymbolToken } from '../../src/utils'

describe('isSymbolToken', () => {
  test('should return whether passed argument is a symbol token.', () => {
    expect(
      isSymbolToken({
        kind: 'asterisk',
        loc: { start: 0, end: 0 },
      })
    ).toBeTruthy()

    expect(
      isSymbolToken({
        kind: 'while',
        loc: { start: 0, end: 0 },
      })
    ).toBeFalsy()
  })
})
