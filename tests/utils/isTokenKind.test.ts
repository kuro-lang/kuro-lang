import { isTokenKind } from '../../src/utils'
import { Token } from '../../src/types'
import { Loc } from '../../src'

describe('isTokenKind', () => {
  test("should return whether passed kinds includes passed token's kind.", () => {
    const token: Token = {
      kind: 'numeric_literal',
      value: 0,
      loc: new Loc(0, 0),
    }

    expect(isTokenKind(token, ['numeric_literal'])).toBeTruthy()
    expect(
      isTokenKind(token, ['string_literal', 'boolean_literal'])
    ).toBeFalsy()
  })
})
