let choices = ['code', 'love', 'learn'];
let wishes = ['health', 'wealth', 'love', 'friendship', 'happiness'];

function random(m, n) {
  let ran = Math.random();
  return Math.round(ran * (n - m)) + m;
}

async function mayAllOfUsGood() {
  try {
    let rand = random(0, 1);
    let promise;
    if (rand) {
      let choice = choices[random(0, choices.length - 1)];
      promise = Promise.resolve(`Cease to ${choice}, cease to live!`);
    } else {
      let wish = wishes[random(0, wishes.length - 1)];
      wish = wish[0].toUpperCase() + wish.slice(1);
      promise = Promise.resolve(
        `${wish} may be async, but it will never be absent, cause it awaits you ahead!`);
    }
    return promise;
  } catch (err) {
    console.error(`${err}, block out, need to be recharged!`)
  }
}

(async () => {
  let counter = 0;
  let promise = await mayAllOfUsGood();
  let timer;
  while (promise && counter < 5) {
    console.log(promise);
    if(timer){
      clearTimeout(timer);
    }
    // promise.then((data) => console.log(data));
    timer = setTimeout(async () => {
      console.log('enter timeout')
      // promise = await mayAllOfUsGood(); 
      timer = null;
      console.log('leave timeout')
    }, 1000);
    counter ++ ;
  }
})()

