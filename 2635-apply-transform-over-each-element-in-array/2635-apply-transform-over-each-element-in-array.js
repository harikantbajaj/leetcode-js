function map(arr, fn) {
 const newArray = [];
 for (let i = 0; i < arr.length; i++) {
   newArray.push(fn(arr[i], i));
 }
 return newArray;
}

// Example usage
const arr = [1, 2, 3];
const plusOne = function (n) {
 return n + 1;
};

const newArray = map(arr, plusOne);
console.log(newArray); // Output: [2, 3, 4]