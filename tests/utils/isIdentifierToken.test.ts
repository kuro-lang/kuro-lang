import { isIdentifierToken } from '../../src/utils'

describe('isIdentifierToken', () => {
  test('should return whether passed argument is a identifier token', () => {
    expect(
      isIdentifierToken({
        kind: 'identifier',
        identifier: 'hoge',
        loc: { start: 0, end: 0 },
      })
    ).toBeTruthy()

    expect(
      isIdentifierToken({
        kind: 'while',
        loc: { start: 0, end: 0 },
      })
    ).toBeFalsy()
  })
})
