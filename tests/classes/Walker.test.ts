import { Walker } from '../../src/classes'

describe('Walker class', () => {
  test('Walker#constructor should set mValues from passed array.', () => {
    const walker = new Walker([0, 1, 2])

    expect(walker['mValues']).toEqual([0, 1, 2])
  })

  test('Walker#constructor should set mValues from passed iteratable object.', () => {
    const walker = new Walker('hoge')

    expect(walker['mValues']).toEqual(['h', 'o', 'g', 'e'])
  })

  test('Walker#constructor should set mIndex by passed argument.', () => {
    const walker = new Walker('hoge', 3)

    expect(walker.index()).toBe(3)
  })

  test('Walker#value should return current value.', async () => {
    const walker = new Walker('hoge')

    expect(walker.value()).toBe('h')
  })

  test('Walker#next should forward current index.', async () => {
    const walker = new Walker('hoge')

    walker.next()
    expect(walker.value()).toBe('o')

    walker.next()
    expect(walker.value()).toBe('g')
  })

  test('Walker#next should forward by passed argument.', async () => {
    const walker = new Walker('hoge')

    expect(walker.next(2)).toBe('g')
    expect(walker.next(-1)).toBe('o')
  })

  test('Walker#next should return next value', async () => {
    const walker = new Walker('hoge')

    expect(walker.next()).toBe('o')
    expect(walker.next()).toBe('g')
  })

  test('Walker#peek should return next value without forwarding.', async () => {
    const walker = new Walker('hoge')

    expect(walker.peek()).toBe('o')
    expect(walker.value()).toBe('h')
  })

  test('Walker#peek should return next value by passed argument without forwarding.', async () => {
    const walker = new Walker('hoge')

    expect(walker.peek(2)).toBe('g')
    expect(walker.value()).toBe('h')
  })

  test('Walker#match should return whether match values and passed argument.', () => {
    const walker = new Walker('hoge')

    expect(walker.match('fuga')).toBeFalsy()
    expect(walker.match('hogefuga')).toBeFalsy()
    expect(walker.match('hoge')).toBeTruthy()
  })

  test('Walker#done should return whether walking is done.', async () => {
    const walker = new Walker('hoge')

    expect(walker.done()).toBeFalsy()

    walker.next(4)
    expect(walker.done()).toBeTruthy()
  })

  test('Walker#locTo should return loc object of current index to current index + passed argument.', () => {
    const walker = new Walker('hogefuga', 2)

    expect(walker.locTo(3)).toMatchObject({
      start: 2,
      end: 5,
    })
  })

  test('Walker#locTo should return loc object of current index from current index + passed argument.', () => {
    const walker = new Walker('hogefuga', 5)

    expect(walker.locFrom(2)).toMatchObject({
      start: 2,
      end: 5,
    })
  })

  test('Walker#slice should return values that sliced by passed arguments.', () => {
    const walker = new Walker('hogefuga')

    expect(walker.slice(2, 6)).toMatchObject(['g', 'e', 'f', 'u'])
  })

  test('Walker#slice should return values that sliced by current index and passed arguments.', () => {
    const walker = new Walker('hogefuga', 8)

    expect(walker.sliceFrom(4)).toMatchObject(['f', 'u', 'g', 'a'])
  })
})
