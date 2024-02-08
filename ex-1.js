function pivotIndex(nums) {
  let totalSum = nums.reduce((acc, curr) => acc + curr, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (leftSum === totalSum - leftSum - nums[i]) {
      return i;
    }
    leftSum += nums[i];
  }

  return -1;
}

// Test the function
let nums = [1, 7, 3, 6, 5, 6];
console.log("Output:", pivotIndex(nums));
