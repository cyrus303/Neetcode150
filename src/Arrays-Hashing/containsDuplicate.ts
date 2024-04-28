/*
217. Contains Duplicate

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true

Example 2:

Input: nums = [1,2,3,4]
Output: false

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109

*/

export {};

const arr1 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
const arr2 = [1, 2, 3, 41];

const bruteForceSolution = (arr: number[]) => {
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
};

// console.log(bruteForceSolution(arr));asd

const optimisedSolution = (arr: number[]) => {
  const length = arr.length;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < length; i++) {
    if (arr[i] === arr[i + 1]) {
      return true;
    }
  }
  return false;
};

// console.log(optimisedSolution(arr1));

const optimalSolution = (arr: number[]) => {
  const HashMap: Record<string, number> = {};

  arr.map((ele) => {
    HashMap[ele] = (HashMap[ele] || 0) + 1;
  });

  for (let key in HashMap) {
    if (HashMap[key] > 1) return true;
  }

  return false;
};

// console.log(optimalSolution(arr1));

const setSolution = (arr: number[]) => {
  const SET = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (SET.has(arr[i])) {
      return true;
    } else {
      SET.add(arr[i]);
    }
  }
  return false;
};

console.log(setSolution(arr1));
