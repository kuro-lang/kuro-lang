import { Loc } from '../../src/classes'

describe('Loc class', () => {
  test('Loc#constructor should set start and end properties.', () => {
    expect(new Loc(0, 10)).toMatchObject({
      start: 0,
      end: 10,
    })
  })

  test('Loc#slice should slice given object', () => {
    const loc = new Loc(0, 11)

    expect(loc.slice('hello world!')).toBe('hello world')
  })
})
