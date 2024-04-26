/*
238. Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
*/
const nums = [1, 2, 3, 4];

const bruteForceSolution = (nums: number[]) => {
  console.log('Input ->', nums);
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let multiply = 1;
    for (let j = 0; j < nums.length; j++) {
      if (j !== i) {
        multiply = multiply * nums[j];
      }
    }
    result.push(multiply);
  }
  return result;
};

// console.log(bruteForceSolution(nums));

const optimisedSolution = (nums: number[]) => {
  // console.log(nums);

  let leftArr = [];
  let rightArr = [];
  let leftMul = 1;
  let rightMul = 1;
  let n = nums.length;

  let resultArr = [];

  for (let i = 0; i < n; i++) {
    leftArr[i] = leftMul;
    leftMul *= nums[i];
  }

  for (let j = n - 1; j >= 0; j--) {
    rightArr[j] = rightMul;
    rightMul *= nums[j];
  }

  for (let k = 0; k < n; k++) {
    resultArr[k] = leftArr[k] * rightArr[k];
  }

  return resultArr;
};

console.log(optimisedSolution(nums));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
