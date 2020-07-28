import { isLiteralToken } from '../../src/utils'
import { Loc } from '../../src'

describe('isLiteralToken', () => {
  test('should return whether passed argument is a literal token.', () => {
    expect(
      isLiteralToken({
        kind: 'string_literal',
        value: '',
        loc: new Loc(0, 0),
      })
    ).toBeTruthy()

    expect(
      isLiteralToken({
        kind: 'asterisk',
        loc: new Loc(0, 0),
      })
    ).toBeFalsy()
  })
})
