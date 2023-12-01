const { partOne } = require('./index')

describe('partOne', () => {
  it('returns the sum of the first and last digit of each line in the input', () => {
    const expected = 142
    const actual = partOne('testData.txt')

    expect(actual).toEqual(expected)
  })
})
