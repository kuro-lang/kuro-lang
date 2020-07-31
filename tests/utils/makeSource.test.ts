import { makeSource } from '../../src'

describe('makeSource test', () => {
  test('should return source code object that does not have filename', () => {
    expect(makeSource('hoge')).toMatchObject({
      code: 'hoge',
    })
  })

  test('should return source code by passed arguments', () => {
    expect(makeSource('test.kuro', 'hoge')).toMatchObject({
      filename: 'test.kuro',
      code: 'hoge',
    })
  })
})
