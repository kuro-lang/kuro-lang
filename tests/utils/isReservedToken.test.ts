import { isReservedToken } from '../../src/utils'

describe('isReservedToken', () => {
  test('should return whether passed argument is a reserved token.', () => {
    expect(
      isReservedToken({
        kind: 'while',
        loc: { start: 0, end: 0 },
      })
    ).toBeTruthy()

    expect(
      isReservedToken({
        kind: 'asterisk',
        loc: { start: 0, end: 0 },
      })
    ).toBeFalsy()
  })
})
