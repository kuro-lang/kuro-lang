import { IdentifierRule } from '../../../src/impls'
import { Walker } from '../../../src/classes'

describe('IdentifierRule test', () => {
  test('should validate', () => {
    const rule = new IdentifierRule()

    expect(rule.validate(new Walker('hoge'))).toBeTruthy()

    expect(rule.validate(new Walker('100'))).toBeFalsy()
  })

  test('should execute', () => {
    const rule = new IdentifierRule()

    expect(rule.execute(new Walker('hoge'))).toMatchObject({
      kind: 'identifier',
      loc: {
        start: 0,
        end: 4,
      },
    })
  })
})
