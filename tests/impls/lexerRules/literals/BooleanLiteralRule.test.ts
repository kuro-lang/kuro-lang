import { BooleanLiteralLexerRule } from '../../../../src/impls'
import { Walker } from '../../../../src/classes'

describe('BooleanLiteralRule test', () => {
  test('should validate', () => {
    const rule = new BooleanLiteralLexerRule()

    expect(rule.validate(new Walker('true'))).toBeTruthy()
    expect(rule.validate(new Walker('false'))).toBeTruthy()

    expect(rule.validate(new Walker('nyan'))).toBeFalsy()
  })

  test('should execute', () => {
    const rule = new BooleanLiteralLexerRule()

    expect(rule.execute(new Walker('true'))).toMatchObject({
      kind: 'boolean_literal',
      value: true,
      loc: {
        start: 0,
        end: 4,
      },
    })
    expect(rule.execute(new Walker('false'))).toMatchObject({
      kind: 'boolean_literal',
      value: false,
      loc: {
        start: 0,
        end: 5,
      },
    })
  })
})
