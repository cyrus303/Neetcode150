/*
1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

export {};

const arr = [1, 3, 4, 2];
const target = 6;

const bruteForceSolution = (arr: number[], target: number) => {
  console.log('input: ', arr, 'target: ', target);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
};

// console.log(bruteForceSolution(arr, target));

const optimisedSolution = (arr: number[], target: number) => {
  for (let i = 0; i < arr.length; i++) {
    let compliment = target - arr[i];
    let found = arr.findIndex((value) => {
      return value === compliment;
    });
    if (found > -1 && i !== found) return [i, found];
  }
};

console.log(optimisedSolution(arr, target));

const optimalSolution = (arr: number[], target: number) => {
  const HASH: any = {};

  arr.forEach((ele, index) => {
    HASH[ele] = index;
  });

  console.log(HASH);

  for (let i = 0; i < arr.length; i++) {
    const compliment = target - arr[i];

    if (HASH[compliment] !== undefined && HASH[compliment] !== i) {
      return [i, HASH[compliment]];
    }
  }

  console.log('HASH', HASH);
};

// console.log(optimalSolution(arr, target));
