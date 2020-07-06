import { isCommentToken } from '../../src/utils'

describe('isCommentToken', () => {
  test('should return whether passed argument is a comment token.', () => {
    expect(
      isCommentToken({
        kind: 'inline_comment',
        content: '',
        loc: { start: 0, end: 0 },
      })
    ).toBeTruthy()

    expect(
      isCommentToken({
        kind: 'asterisk',
        loc: { start: 0, end: 0 },
      })
    ).toBeFalsy()
  })
})
