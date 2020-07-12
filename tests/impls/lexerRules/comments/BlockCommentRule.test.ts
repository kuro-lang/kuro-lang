import { Walker } from '../../../../src/classes'
import {
  BlockCommentRule,
  UnterminatedBlockCommentError,
} from '../../../../src/impls'

describe('BlockCommentRule class', () => {
  test('should validate', () => {
    const rule = new BlockCommentRule()

    expect(rule.validate(new Walker('/* hello */'))).toBeTruthy()
    expect(rule.validate(new Walker('*/ hello */'))).toBeFalsy()
  })

  test('should execute', () => {
    const rule = new BlockCommentRule()

    expect(rule.execute(new Walker('/* hello */'))).toMatchObject({
      kind: 'block_comment',
      content: ' hello ',
      loc: {
        start: 0,
        end: 11,
      },
    })
  })

  test('should allow newlines', () => {
    const rule = new BlockCommentRule()

    expect(rule.execute(new Walker('/*\nhello\nworld\n*/'))).toMatchObject({
      kind: 'block_comment',
      content: '\nhello\nworld\n',
      loc: {
        start: 0,
        end: 17,
      },
    })
  })

  test('should dissallow escapes', () => {
    const rule = new BlockCommentRule()

    expect(rule.execute(new Walker('/*\\*/*/'))).toMatchObject({
      kind: 'block_comment',
      content: '\\',
      loc: {
        start: 0,
        end: 5,
      },
    })
  })

  test('should throw UnterminatedBlockCommentError', () => {
    const rule = new BlockCommentRule()

    expect(() => {
      rule.execute(new Walker('/* hello'))
    }).toThrow(UnterminatedBlockCommentError)
  })
})
