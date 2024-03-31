function once(fn) {
  let called = false;
  let result;

  return function() {
    if (!called) {
      called = true;
      result = fn.apply(this, arguments);  
      return result;
    } else {
      return undefined;  
    }
  };
}

const add = (a, b, c) => a + b + c;
const onceAdd = once(add);

console.log(onceAdd(1, 2, 3)); 
console.log(onceAdd(2, 3, 6));