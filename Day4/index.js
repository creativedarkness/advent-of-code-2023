const fs = require('fs')
const path = require('path')

exports.partOne = function (file) {
  const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8').trim().split('\n')

  function toDict (numbers) {
    return numbers.reduce((acc, num) => {
      acc[num] = true
      return acc
    }, {})
  }

  return input.map(line => {
    const cards = line.split(':')[1]
    const [winners, numbers] = cards.split('|')
    const wData = winners.split(' ').filter(x => x)
    const wDict = toDict(wData.map(num => parseInt(num.trim())))

    return [wDict, numbers.split(' ').map(num => parseInt(num))]
  }).reduce((acc, [wDict, numbers]) => {
    let points = 0

    numbers.forEach(x => {
      if (wDict[x]) {
        if (points === 0) {
          points = 1
        } else {
          points <<= 1
        }
      }
    })
    return acc + points
  }, 0)
}

console.log(this.partOne('input.txt'))

// exports.partTwo = function (file) {
//   const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8').toString().split('\n')

// }

// console.log(this.partTwo('input.txt'))
