const { partOne } = require('./index')
const { partTwo } = require('./index')

describe('Day 1', () => {
  describe('partOne', () => {
    it('returns the sum of the first and last digit of each line in the input', () => {
      const expected = 142
      const actual = partOne('partOneTestData.txt')

      expect(actual).toEqual(expected)
    })
  })

  describe.only('partTwo', () => {
    it('returns the sum of the first and last digit of each line in the input', () => {
      const expected = 281
      const actual = partTwo('partTwoTestData.txt')

      expect(actual).toEqual(expected)
    })
  })

})
