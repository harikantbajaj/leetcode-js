function* inorderTraversal(arr) {
    if (!Array.isArray(arr)) {
        yield arr;
        return;
    }
    
    for (const subArr of arr) {
        yield* inorderTraversal(subArr);
    }
}

// Test cases
const arr1 = [[[6]], [1, 3], []];
const generator1 = inorderTraversal(arr1);
console.log(Array.from(generator1)); // Output: [6, 1, 3]

const arr2 = [];
const generator2 = inorderTraversal(arr2);
console.log(Array.from(generator2)); // Output: []
