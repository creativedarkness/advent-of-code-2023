const { partOne } = require('./index')
const { partTwo } = require('./index')

describe('Day 1', () => {
  describe('partOne', () => {
    it('returns the sum of all the part numbers in the engine schematic', () => {
      const expected = 4361
      const actual = partOne('testData.txt')

      expect(actual).toEqual(expected)
    })
  })

  describe.only('partTwo', () => {
    it('returns the sum of all gear rations', () => {
      const expected = 467835
      const actual = partTwo('testData.txt')

      expect(actual).toEqual(expected)
    })
  })
})
