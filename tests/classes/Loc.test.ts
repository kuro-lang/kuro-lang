import { Loc } from '../../src/classes'

describe('Loc class', () => {
  test('Loc#constructor should set start and end properties.', () => {
    expect(new Loc(0, 10)).toMatchObject({
      start: 0,
      end: 10,
    })
  })
})
