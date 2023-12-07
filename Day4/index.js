const fs = require('fs')
const path = require('path')

exports.partOne = function (file) {
  const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8').trim().split('\n')

  return input.forEach((line, i) => {
    const scratchcards = line.split(`Card ${i + 1}: `).filter(Boolean)
    return scratchcards.map(scratchcard => {
      const games = scratchcard.split('|').map((game, i) => {
        if (game[i][i] === game[i = 1][i]) return game[i + 1][i]
        return console.log({ i, game })
      })
      // console.log(games)
      return games
    })
  })
}

// console.log(this.partOne('input.txt'))

// exports.partTwo = function (file) {
//   const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8').toString().split('\n')

// }

// console.log(this.partTwo('input.txt'))
