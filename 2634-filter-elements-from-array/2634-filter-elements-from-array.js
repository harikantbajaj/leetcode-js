function filter(arr, fn) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (fn(element, i)) {  
      filteredArr.push(element);
    }
  }
  return filteredArr;
}

const arr = [0, 10, 20, 30];
const greaterThan10 = function (n) {
  return n > 10;
};

const filteredArr = filter(arr, greaterThan10);
console.log(filteredArr); 