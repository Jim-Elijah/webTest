function unique(arr) {
  // 编写代码
  let len = arr.length;
  let s1 = new Set(), s2 = new Set()
  for (let i = 0; i < len; i++) {
    // 不是引用型 或 null
    if (!isObj(arr[i]) || arr[i] === null) {
      s1.add(arr[i])
    } else {
      if (s2.size === 0) {
        s2.add(arr[i])
      } else {
        let flag = false;
        // s2中是否有arr[i]
        s2.forEach(item => {
          if (isSame(item, arr[i])) {
            flag = true;
          }
        })
        if (!flag) {
          s2.add(arr[i])
        }
      }
    }
  }
  let arr2 = [...s2]
  let arr1 = [...s1]
  console.log('ret', arr1, arr2)
  return [...s1, ...s2]

  function isObj(a) {
    return typeof a === 'object'
  }
  function isSame(obj1, obj2) {
    console.log(obj1, obj2)
    let keys = Object.keys(obj1)
    console.log('keys', keys)
    let len = keys.length;
    for (let i = 0; i < len; i++) {
      let key = keys[i]
      console.log('key', key)
      if (obj2[key] === 'undefined') {
        return false;
      }
      console.log('val', obj1[key], obj2[key])
      if (!isObj(obj1[key]) && isObj(obj2[key])) {
        return false;
      }
      if (!isObj(obj2[key]) && isObj(obj1[key])) {
        return false;
      }
      if (!isObj(obj1[key]) && !isObj(obj2[key])) {
        if (obj1[key] !== obj2[key]) {
          return false;
        }
      } else {
        if (!isSame(obj1[key], obj2[key])) {
          return false;
        }
      }
    }
    return true;
  }
}

// let arr = [123, {a:'1'}, {a:'1'}]
let arr = [123, { a: '1' }, { a: '1' }, { a: { b: 1 } }, { a: { b: '1' } }, { a: 1 }, '1', 1]
console.log(arr)
arr = unique(arr)
console.log(arr)

