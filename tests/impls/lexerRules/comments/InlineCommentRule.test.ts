import { InlineCommentRule } from '../../../../src/impls'
import { Walker } from '../../../../src/classes'

describe('InlineCommentRule test', () => {
  test('should validate', () => {
    const rule = new InlineCommentRule()

    expect(rule.validate(new Walker('// hello world'))).toBeTruthy()
    expect(rule.validate(new Walker('hello world'))).toBeFalsy()
  })

  test('should execute', () => {
    const rule = new InlineCommentRule()

    expect(rule.execute(new Walker('// hello world'))).toMatchObject({
      kind: 'inline_comment',
      content: ' hello world',
      loc: {
        start: 0,
        end: 14,
      },
    })
  })
})
