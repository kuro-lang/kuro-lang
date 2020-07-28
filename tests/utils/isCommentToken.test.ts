import { isCommentToken } from '../../src/utils'
import { Loc } from '../../src'

describe('isCommentToken', () => {
  test('should return whether passed argument is a comment token.', () => {
    expect(
      isCommentToken({
        kind: 'inline_comment',
        content: '',
        loc: new Loc(0, 0),
      })
    ).toBeTruthy()

    expect(
      isCommentToken({
        kind: 'asterisk',
        loc: new Loc(0, 0),
      })
    ).toBeFalsy()
  })
})
