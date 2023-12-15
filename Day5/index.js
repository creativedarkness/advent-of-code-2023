const fs = require('fs')
const path = require('path')

exports.partOne = function (file) {
  const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8').trim().split('\n')

  return input
}

// console.log(this.partOne('input.txt'))

// exports.partTwo = function (file) {
//   const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8').toString().split('\n')

// }

// console.log(this.partTwo('input.txt'))
