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

const numbersMap = {
  on: 1,
  tw: 2,
  th: 3,
  fo: 4,
  fi: 5,
  si: 6,
  se: 7,
  ei: 8,
  ni: 9
}

const searchTerms = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

// two1nine // two 1 nine
// eightwothree // eight two three
// abcone2threexyz // one 2 three
// xtwone3four // two one 3 four
// 4nineeightseven2 // four nine eight seven 2
// zoneight234 // one eight 2 3 4
// 7pqrstsixteen // 7 six sixteen

exports.partTwo = function (file) {
  const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8').toString().split('\n') // read file and split by line
  let sum = 0

  // input.forEach((line) => {
  //   const digits = line.split('').map(Number).filter(Boolean) // split each line into an array of digits
  //   const first = digits[0]
  //   const last = digits[digits.length - 1]

  //   sum += parseInt(`${first}${last}`)
  // })

  input.forEach((line) => {
    const words = line.split(' ')
    const numbers = words.filter((word) => {
      return numbersMap[word]
    })
    const first = numbers[0]
    const last = numbers[numbers.length - 1]
    console.log(words, numbers)
    sum += parseInt(`${first}${last}`)
  })

  return sum
}

// console.log(exports.partOne('partOneInput.txt'))
