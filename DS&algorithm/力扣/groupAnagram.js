/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map()
  for (let str of strs) {
    const arr = Array(26).fill(0)
    for (let i = 0, len = str.length; i < len; i++) {
      const index = str.charCodeAt(i) - 97
      arr[index]++
    }
    const key = arr.join('-')
    if (!map.has(key)) {
      map.set(key, [str])
    } else {
      let tmp = map.get(key)
      tmp.push(str)
      tmp.sort()
      map.set(key, tmp)
      // map.set(key, [...map.get(key), str]);
    }
  }
  return [...map.values()]
}
// var groupAnagrams = function (strs) {
//   let hash = new Map();

//   for (let str of strs) {
//     let arr = Array(26).fill(0);
//     for (let i = 0; i < str.length; i++) {
//       arr[str.charCodeAt(i) - 97]++;
//     }
//     let hashKey = arr.join();

//     if (hash.has(hashKey)) {
//       hash.set(hashKey, [...hash.get(hashKey), str]);
//     } else {
//       hash.set(hashKey, [str]);
//     }
//   }
//   return [...hash.values()];
// };

// strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
strs = ["bdddddddddd","bbbbbbbbbbc"]

console.log(groupAnagrams(strs))