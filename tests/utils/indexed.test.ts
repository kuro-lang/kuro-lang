import { indexed } from '../../src/utils'

describe('indexed test', () => {
  test('should returns generator', () => {
    const items = indexed(['hoge', 'fuga'])

    expect(items.next().value).toMatchObject([0, 'hoge'])
    expect(items.next().value).toMatchObject([1, 'fuga'])
  })
})
