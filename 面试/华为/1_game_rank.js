/**
 * 
 * @param {array} data 
 */
function rank(data) {
  let m = new Map()
  let len = data.length;
  for (let i = 0; i < len; i++) {
    let a = data[i].split(' ')
    console.log(a)
    // a-b 2:1
    let name = a[0], score = a[1]
    console.log(name, score)
    if (m.has(name[0])) {
      m.set(name[0], m.get(name[0]) + parseInt(score[0]))
      console.log('set', name[0], score[0])
      console.log(m)
    }
    else {
      m.set(name[0], parseInt(score[0]))
      console.log('set', name[0], score[0])
      console.log(m)

    }
    if (m.has(name[2])) {
      m.set(name[2], m.get(name[2]) + parseInt(score[2]))
      console.log('set2', name[2], score[2])
      console.log(m)

    }
    else {
      m.set(name[2], parseInt(score[2]))
      console.log('set2', name[2], score[2])
      console.log(m)

    }
    console.log(m)

  }
  console.log(m)
  let res = ''
  m.forEach((val, key) => {
    res += key
    res += ' '
    res += val
    res += ','
  })
  return res.slice(0, res.length - 1)
}
/**
 * 比赛结果以 ['a-b 2:1', 'b-c 2:1', 'c-a 4:1']的形式，求每个队的得分，
 * 输出格式 ：a 3,b 3,c 5
 */
let m = ['a-b 2:1', 'b-c 2:1', 'c-a 4:1']
console.log(rank(m))