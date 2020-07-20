import { PatternRule } from '../../../src/impls'
import { Walker } from '../../../src/classes'

describe('PatternRule test', () => {
  test('should validate', () => {
    const rule = new PatternRule((make) => [
      make('+', 'plus'),
      make('-', 'minus'),
    ])

    expect(rule.validate(new Walker('+'))).toBeTruthy()
    expect(rule.validate(new Walker('-'))).toBeTruthy()

    expect(rule.validate(new Walker('√'))).toBeFalsy()
  })

  test('should execute', () => {
    const rule = new PatternRule((make) => [make('+', 'plus')])

    expect(rule.execute(new Walker('+'))).toMatchObject({
      kind: 'plus',
      loc: {
        start: 0,
        end: 1,
      },
    })
  })
})
