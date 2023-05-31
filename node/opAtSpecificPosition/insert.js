const fs = require('fs')

const data = fs.readFileSync('./tmp.txt', 'utf8').split('\n')
console.log('1', data)
data.splice(data.length - 2, 0, `test${Math.random().toString().slice(-4)}`)
console.log('2', data)
fs.writeFileSync('./tmp.cpy.txt', data.join('\n'), 'utf8')
