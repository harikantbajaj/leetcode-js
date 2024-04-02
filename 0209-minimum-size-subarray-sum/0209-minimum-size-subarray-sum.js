function minSubArrayLen(target, nums) {
  let left = 0;
  let currSum = 0;
  let minLength = Infinity;

  for (let right = 0; right < nums.length; right++) {
    currSum += nums[right];

    while (currSum >= target) {
      minLength = Math.min(minLength, right - left + 1)
      currSum -= nums[left]
      left += 1;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

// Test 
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));  // Output: 2
console.log(minSubArrayLen(4, [1, 4, 4]));          // Output: 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
