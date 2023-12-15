const fs = require('fs')
const path = require('path')

exports.partOne = function (file) {
  const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8').trim().split('\n')

  const bagContents = {
    red: 12,
    green: 13,
    blue: 14
  }

  return input.map(line => {
    return line
      .split(': ')[1]
      .split('; ')
      .map(set => {
        const pulls = set.split(', ')
        return pulls.every(pull => {
          const [count, color] = pull.split(' ')
          return bagContents[color] >= Number(count)
        })
      }).every(p => p)
  }).reduce((sum, result, i) => {
    return result ? sum + (i + 1) : sum
  }, 0)
}

// console.log(this.partOne('input.txt'))

exports.partTwo = function (file) {
  const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8').toString().split('\n')

  return input.map(line => {
    const max = {
      red: 0,
      green: 0,
      blue: 0
    }

    line
      .split(': ')[1]
      .split('; ')
      .forEach(set => {
        const pulls = set.split(', ')
        return pulls.forEach(pull => {
          const [count, color] = pull.split(' ')
          if (max[color] < Number(count)) {
            max[color] = Number(count)
          }
        })
      })
    return max.red * max.green * max.blue
  }).reduce((sum, value) => sum + value)
}

// console.log(this.partTwo('input.txt'))
