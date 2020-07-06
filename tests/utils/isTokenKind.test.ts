import { isTokenKind } from '../../src/utils'
import { Token } from '../../src/types'

describe('isTokenKind', () => {
  test("should return whether passed kinds includes passed token's kind.", () => {
    const token: Token = {
      kind: 'numeric_literal',
      value: 0,
      loc: {
        start: 0,
        end: 0,
      },
    }

    expect(isTokenKind(token, ['numeric_literal'])).toBeTruthy()
    expect(
      isTokenKind(token, ['string_literal', 'boolean_literal'])
    ).toBeFalsy()
  })
})
