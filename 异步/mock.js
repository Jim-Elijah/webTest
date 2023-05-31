const urls = [
  {
    url: 'info1',
    time: 1500,
    priority: 1,
  },
  {
    url: 'info2',
    time: 2000,
    priority: 3,
  },
  {
    url: 'info3',
    time: 1000,
    priority: 1,
  },
  {
    url: 'info4',
    time: 300,
    priority: 2,
  },
  {
    url: 'info5',
    time: 1000,
    priority: 1,
  },
  {
    url: 'info6',
    time: 400,
    priority: 3,
  },
  {
    url: 'info7',
    time: 1000,
    priority: 1,
  },
]

const request = (obj) => {
  return new Promise(resolve => {
    console.log('----', obj.url, ' start')
    setTimeout(() => {
      console.log(obj.url, ' Ok')
      resolve(obj.url)
    }, obj.time)
  })
}

module.exports = {
  urls,
  request,
}