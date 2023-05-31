function timer(data) {
  console.log('pFunc')
  return new Promise((resolve) => {
    console.log('in promise')
    setTimeout(() => resolve(data), 1000);
  });
};
timer(1).then(data => {console.log(data)})