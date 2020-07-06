import { isLiteralToken } from '../../src/utils'

describe('isLiteralToken', () => {
  test('should return whether passed argument is a literal token.', () => {
    expect(
      isLiteralToken({
        kind: 'string_literal',
        value: '',
        loc: { start: 0, end: 0 },
      })
    ).toBeTruthy()

    expect(
      isLiteralToken({
        kind: 'asterisk',
        loc: { start: 0, end: 0 },
      })
    ).toBeFalsy()
  })
})
