import { isReservedToken } from '../../src/utils'
import { Loc } from '../../src'

describe('isReservedToken', () => {
  test('should return whether passed argument is a reserved token.', () => {
    expect(
      isReservedToken({
        kind: 'while',
        loc: new Loc(0, 0),
      })
    ).toBeTruthy()

    expect(
      isReservedToken({
        kind: 'asterisk',
        loc: new Loc(0, 0),
      })
    ).toBeFalsy()
  })
})
