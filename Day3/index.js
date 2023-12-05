const fs = require('fs')
const path = require('path')

exports.partOne = function (file) {
  const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8').trim().split('\n')

  const hasSymbol = str => str?.length && str.split('').find(char => isNaN(char) && char !== '.')

  const rows = input.length
  const cols = input[0].length
  const parts = []

  // input.forEach((row, r) => (
  //   row.map((cols, c) => {
  //     let num = input[r][c].toString()
  //     if (isNaN(num)) return
  //     while (++c < cols) {
  //       if (Number.isInteger(parseInt(input[r][c]))) num += input[r][c]
  //       else break
  //     }

  //     const top = r === 0 ? '' : input[r - 1]?.substring(c - num.length - 1, c + 1)
  //     const bottom = r === rows - 1 ? '' : input[r + 1]?.substring(c - num.length - 1, c + 1)
  //     const left = input[r][c - num.length - 1] || ''
  //     const right = input[r][c] || ''

  //     return (hasSymbol(top) || hasSymbol(bottom) || hasSymbol(left) || hasSymbol(right))
  //   })
  // ))

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let num = '' + input[r][c]
      if (isNaN(num)) continue

      while (++c < cols) {
        if (Number.isInteger(parseInt(input[r][c]))) num += input[r][c]
        else break
      }

      const top = r === 0 ? '' : input[r - 1]?.substring(c - num.length - 1, c + 1)
      const bottom = r === rows - 1 ? '' : input[r + 1]?.substring(c - num.length - 1, c + 1)
      const left = input[r][c - num.length - 1] || ''
      const right = input[r][c] || ''

      if (hasSymbol(top) || hasSymbol(bottom) || hasSymbol(left) || hasSymbol(right)) {
        parts.push(Number(num))
      }
    }
  }

  return parts.reduce((sum, value) => (sum + value), 0)
}

// console.log(this.partOne('input.txt'))

// exports.partTwo = function (file) {
//   const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8').toString().split('\n')

//   const hasSymbol = str => str?.length && str.split('').find(char => isNaN(char) && char !== '.')
//   // const isGear

//   const rows = input.length
//   const cols = input[0].length
//   const parts = []

//   for (let r = 0; r < rows; r++) {
//     for (let c = 0; c < cols; c++) {
//       let num = '' + input[r][c]
//       if (isNaN(num)) continue

//       while (++c < cols) {
//         if (Number.isInteger(parseInt(input[r][c]))) num += input[r][c]
//         else break
//       }

//       const top = r === 0 ? '' : input[r - 1]?.substring(c - num.length - 1, c + 1)
//       const bottom = r === rows - 1 ? '' : input[r + 1]?.substring(c - num.length - 1, c + 1)
//       const left = input[r][c - num.length - 1] || ''
//       const right = input[r][c] || ''
//     }
//   }
// }

// console.log(this.partTwo('input.txt'))
