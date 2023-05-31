function leastStep(str, sub, start) {
  let len1 = str.length, len2 = sub.length;
  let i = start, count = 0;
  for (let i = 0; i < len2; i++) {
    let pos = str.indexOf(sub[i]);
    if (pos !== -1) {
      count += closest(str, sub[i], start)
      start = pos;
    } else {
      // 找不到sub[i]
      throw new Error('substr not found')
    }
  }
  return count;

  function closePostion(str, s, start) {
    let len = str.length;
    let pos = [], p = str.indexOf(s)
    while (p !== -1 && p < len) {
      pos.push(p)
      p = str.indexOf(s, p)
    }
    let closest = len;
    for (let i = 0; i < pos.length; i++) {
      closest = Math.min(closest, len - pos[i])
    }
    if(closest !== len){
      return closest;
    }
    return len;
  }
}

/**
 * 每次只能左移或右移一步，在最左边的位置左移可以到最右边，最右边的位置右移可以到最左边
 * 在str中从位置start开始，找到子串s移动的最小步数。
 */
// let str = 'aemoyn', sub = 'amo', start = 2; // 5
let str = 'aemomaeoyn', sub = 'amo', start = 3; // 4
console.log(leastStep(str, sub, start))