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

console.log(exports.partOne('input.txt'))
