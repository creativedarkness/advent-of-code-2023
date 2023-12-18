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

exports.partTwo = function (file) {
  const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8').split('\n') // read file and split by line

  const numberMappings = {
    one: 'one1one',
    two: 'two2two',
    three: 'three3three',
    four: 'four4four',
    five: 'five5five',
    six: 'six6six',
    seven: 'seven7seven',
    eight: 'eight8eight',
    nine: 'nine9nine'
  }

  let sum = 0

  for (let line of input) {
    for (const num of Object.keys(numberMappings)) {
      line = line.replaceAll(num, numberMappings[num])
    }
    const digits = line.split('').filter(el => !isNaN(parseInt(el))).join('')
    const first = parseInt(digits[0])
    const last = parseInt(digits[digits.length - 1])

    sum += parseInt(`${first}${last}`)
  }
  return sum
}

// console.log(this.partTwo('input.txt'))
