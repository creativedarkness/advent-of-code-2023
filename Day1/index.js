const fs = require('fs')
const path = require('path')

/**
 * Part One
 * On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.
 */
exports.partOne = function (file) {
  const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8').toString().split('\n') // read file and split by line

  let sum = 0

  input.forEach((line) => {
    const digits = line.split('').map(Number).filter(Boolean) // split each line into an array of digits
    const first = digits[0]
    const last = digits[digits.length - 1]

    sum += parseInt(`${first}${last}`)
  })
  return sum
}

// console.log(this.partOne('input.txt'))

const numbersMap = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
}

const wordDigits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

// two1nine // two 1 nine
// eightwothree // eight two three
// abcone2threexyz // one 2 three
// xtwone3four // two one 3 four
// 4nineeightseven2 // four nine eight seven 2
// zoneight234 // one eight 2 3 4
// 7pqrstsixteen // 7 six

exports.partTwo = function (file) {
  const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8').toString().split('\n') // read file and split by line

  input.forEach(line => {
    let first
    let last

    for (let i = 0; i <= line.length; i++) {
      const num = parseInt(line[i], 10)
      const digitAtIndex = !isNaN(num)
        ? num
        : getNamedDigitsAtIndex(line, i)

      // console.log({ num, digitAtIndex, first, last })

      if (digitAtIndex) {
        if (!first) {
          first = digitAtIndex
        } else {
          last = digitAtIndex
        }
      }
    }

    if (!last) {
      last = first
    }

    return parseInt(`${first}${last}`, 10) || 0
  })
}

function getNamedDigitsAtIndex (line, index) {
  const restOfLine = line.slice(index)

  for (const namedDigit of wordDigits) {
    if (restOfLine.startsWith(namedDigit)) {
      return wordDigits.indexOf(namedDigit) + 1
    }
  }
  return false
}

// console.log(this.partTwo('input.txt'))
