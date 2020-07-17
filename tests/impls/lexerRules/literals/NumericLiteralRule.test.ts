import { NumericLiteralRule, UnexpectedTokenError } from '../../../../src/impls'
import { Walker } from '../../../../src/classes'

describe('NumericLiteralRule class', () => {
  test('should validate', () => {
    const rule = new NumericLiteralRule()

    expect(rule.validate(new Walker('10'))).toBeTruthy()
    expect(rule.validate(new Walker('a10'))).toBeFalsy()
  })

  test('should execute', () => {
    const rule = new NumericLiteralRule()

    expect(rule.execute(new Walker('10'))).toMatchObject({
      kind: 'numeric_literal',
      value: 10,
      loc: {
        start: 0,
        end: 2,
      },
    })

    expect(rule.execute(new Walker('3.14'))).toMatchObject({
      kind: 'numeric_literal',
      value: 3.14,
      loc: {
        start: 0,
        end: 4,
      },
    })
  })

  test('should throw UnexpectedTokenError', () => {
    const rule = new NumericLiteralRule()

    expect(() => {
      rule.execute(new Walker('10.10.10'))
    }).toThrow(UnexpectedTokenError)
  })
})
