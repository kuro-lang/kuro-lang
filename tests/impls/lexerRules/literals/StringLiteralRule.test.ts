import {
  StringLiteralRule,
  UnterminatedStringLiteralError,
} from '../../../../src/impls'
import { Walker } from '../../../../src/classes'

describe('StringLiteralRule class', () => {
  test('should validate', () => {
    const rule = new StringLiteralRule()

    expect(rule.validate(new Walker('"hello"'))).toBeTruthy()
  })

  test('should execute', () => {
    const rule = new StringLiteralRule()

    expect(rule.execute(new Walker('"hello world"'))).toMatchObject({
      kind: 'string_literal',
      value: 'hello world',
      loc: {
        start: 0,
        end: 13,
      },
    })
  })

  test('should escape', () => {
    const rule = new StringLiteralRule()

    expect(
      rule.execute(new Walker('"The program says \\"hello world\\""'))
    ).toMatchObject({
      kind: 'string_literal',
      value: 'The program says "hello world"',
      loc: {
        start: 0,
        end: 34,
      },
    })
  })

  test('should throw UnterminatedStringLiteralError', () => {
    const rule = new StringLiteralRule()

    expect(() => {
      rule.execute(new Walker('"hello'))
    }).toThrow(UnterminatedStringLiteralError)
  })
})
