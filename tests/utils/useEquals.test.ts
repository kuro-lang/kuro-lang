import { useEquals } from '../../src/utils'

describe('useEquals', () => {
  test('should return check function', () => {
    const checker = useEquals(10)

    expect(checker(10)).toBeTruthy()
    expect(checker(20)).toBeFalsy()
  })
})
