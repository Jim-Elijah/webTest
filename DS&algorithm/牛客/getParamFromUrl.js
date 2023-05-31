// http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe key
function getUrlParam(sUrl, sKey) {
  // [paramS,paramE)是参数区，key=val
  let paramStart = sUrl.indexOf('?') + 1;
  let i = sUrl.indexOf('#');
  let paramsEnd = i === -1 ? sUrl.length : i;
  // [key=1,key=2,key=3,test=4]
  let arr = sUrl.substring(paramStart, paramsEnd).split('&');
  let paramObj = {}
  arr.forEach((value, index) => {
    // item是 [key, 1]
    let item = value.split('=');
    let key = item[0],
      val = item[1];
    if (!paramObj[key]) {
      paramObj[key] = [];
      paramObj[key].push(val);
    } else {
      paramObj[key].push(val);
    }
  })
  // console.log(paramObj, '\n-----------------------------');
  if (!sKey) { // 不传sKey默认undefined
    return paramObj;
  }
  if (paramObj[sKey]) {
    return paramObj[sKey].length === 1 ? paramObj[sKey][0] : paramObj[sKey];
  } else {
    return ''
  }
}
// let url = 'http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe'
// let keys = ['key', 'test', 'hehe', '']
// keys.forEach(val => {
//   console.log(getUrlParam(url, val))
// })