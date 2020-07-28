import { isIdentifierToken } from '../../src/utils'
import { Loc } from '../../src'

describe('isIdentifierToken', () => {
  test('should return whether passed argument is a identifier token', () => {
    expect(
      isIdentifierToken({
        kind: 'identifier',
        identifier: 'hoge',
        loc: new Loc(0, 0),
      })
    ).toBeTruthy()

    expect(
      isIdentifierToken({
        kind: 'while',
        loc: new Loc(0, 0),
      })
    ).toBeFalsy()
  })
})
