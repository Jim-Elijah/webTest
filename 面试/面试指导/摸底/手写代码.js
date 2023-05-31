const isPrimitive = (value) => {
  return value === null || typeof value !== 'object'
}
const deepClone = (obj) => {
  if (isPrimitive(obj)) {
    return obj
  }
  const keys = Object.keys(obj)
  const res = Array.isArray(obj) ? [] : {}
  keys.forEach(key => {
    const value = obj[key]
    res[key] = deepClone(value)
  })
  return res
}

const shallowClone = (obj) => {
  if (isPrimitive(obj)) {
    return obj
  }
  const res = obj
  return res
}

const debounce = (fn, delay = 500) => {
  let timer
  return function (...args) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      typeof fn === 'function' && fn.call(this, ...args)
      clearTimeout(timer)
    }, delay);
  }
}

const throttle = (fn, delay = 500) => {
  let timer
  return function (...args) {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      typeof fn === 'function' && fn.call(this, ...args)
      timer && clearTimeout(timer)
    }, delay);
  }
}

const uniqueArr = (arr) => {
  return [...new Set(arr)]
}