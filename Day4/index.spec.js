const { partOne } = require('./index')
const { partTwo } = require('./index')

describe('Day 1', () => {
  describe('partOne', () => {
    it('returns the sum of scratchcards worth', () => {
      const expected = 13
      const actual = partOne('testData.txt')

      expect(actual).toEqual(expected)
    })
  })

  describe.only('partTwo', () => {
    it('returns the sum of five powers', () => {
      const expected = 2286
      const actual = partTwo('testData.txt')

      expect(actual).toEqual(expected)
    })
  })
})
