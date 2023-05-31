
const fs = require('fs');

var data = fs.readFileSync('./hello.txt');
console.log(data.toString());

// 非阻塞
// fs.readFile('./hello.txt', (err, data) => {
//     if(err){
//         return console.error(err);
//     }
//     console.log(data.toString());
// })

console.log('程序执行完毕');