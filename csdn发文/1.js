String.prototype.myReplace = function(oldChar, newChar) {
  //得到出现字符串时的下标
  var fromIndex = this.myIndexOf(oldChar);
  if (fromIndex == -1) return this.toString();
  //前段字符串
  var firstStr = this.substring(0, fromIndex);
  //后段字符串
  var endStr = this.substring(fromIndex + oldChar.length);
  return firstStr + newChar + endStr;
}

// String.prototype.myReplaceAll = function (s1, s2) {
//   return this.myReplace(new RegExp(s1, "gm"), s2);
// }
String.prototype.myIndexOf = function(s) {
  let str = this, len1 = str.length, len2 = s.length;
  if(len1 < len2){
    return -1;
  }
  for (let i = 0; i < len1; i++) {
    let p1 = i, p2 = 0
    while (str[p1] === s[p2] && p2 < len2) {
      p2++
      p1++
    }
    if (p2 === len2) return i
  }
  return -1
}

function rep(a, b, c){
  let i = a.myIndexOf(b);
  console.log(i);
  while(i !== -1){
    a = a.myReplace(b,c);
    console.log(a);
    i = a.myIndexOf(b)
    console.log(i);
  }
  return a;
}
a = 'aaabbbccc'
b = 'ab'
c = 'bc'
a = rep(a, b, c);
console.log(a,b,c);