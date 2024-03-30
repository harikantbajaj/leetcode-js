function createCounter(init) {
  let currentValue = init;

  return {
    increment() {
      currentValue++;
      return currentValue;
    },

    decrement() {
      currentValue--;
      return currentValue;
    },

    reset() {
      currentValue = init;
      return currentValue;
    },
  };
}

// Example usage
const counter = createCounter(5);
console.log(counter.increment()); // Output: 6
console.log(counter.reset()); // Output: 5
console.log(counter.decrement()); // Output: 4