let timer = null;
const timerFunction = (intialValue, finalValue) => {
  let value = intialValue;
  if (value <= finalValue) {
    timer = setTimeout(() => {
      console.log(value);
      timerFunction(value + 1, finalValue);
    }, value * 1000);
  } else {
    clearTimeout(timer);
  }
};
// timerFunction(1,10)

function delayedPrint() {
  for (let i = 1; i <= 10; i++) {
    let j = getSeriesSum(i);
    setTimeout(() => console.log(i), j * 1000);
  }
}

function getSeriesSum(n) {
  return (n * (n + 1)) / 2;
}

// delayedPrint();
