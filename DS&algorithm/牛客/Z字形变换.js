var convert = function (s, numRows) {
  const gap = 2 * numRows - 2;
  let m = new Map();
  let ans = '';
  for (let i = 0; i < s.length; i = i + gap) {
    const str = s.substr(i, gap);
    for (let j = 0; j < str.length; j++) {
      const index = i + j
      console.log(i, j, index, s[index])
      let mod = index % gap;
      mod = mod < numRows ? mod : (numRows - 1 - (mod + 1) % numRows);
      if (!m.has(mod)) {
        m.set(mod, s[index]);
      } else {
        let tmp = m.get(mod);
        console.log(tmp, typeof tmp, tmp.concat(s[index]))
        m.set(mod, tmp.concat(s[index]));
      }
    }

  }
  for (let str of m.values()) {
    console.log('str', str)
    ans = ans.concat(str);
  }
  return ans;
};

// let s = "PAYPALISHIRING", numRows = 3
let s = "PAYPALISHIRING", numRows = 4
console.log(convert(s, numRows));
