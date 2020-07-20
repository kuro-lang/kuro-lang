import { PatternRule } from '../../../src/impls'
import { Walker } from '../../../src/classes'

describe('PatternRule test', () => {
  test('should sort', () => {
    const rule = new PatternRule((make) => [
      make('+', 'plus'),
      make('+=', 'plus_equals'),
      make('-', 'minus'),
    ])

    expect(rule.patterns[0].kind).toBe('plus_equals')
    expect(rule.patterns[1].kind).toBe('minus')
    expect(rule.patterns[2].kind).toBe('plus')
  })

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
