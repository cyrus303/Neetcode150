/*
128. Longest Consecutive Sequence

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

export {};

const nums = [1, -1, 0, 5, 6, 7, 8, 9, 10];

const bruteForceSolution = (nums: number[]) => {
  const sortedArr = nums.sort((a, b) => a - b);

  let longestLength = 1;
  let currentLength = 1;
  for (let i = 0; i < nums.length; i++) {
    if (sortedArr[i] - sortedArr[i + 1] === -1) {
      currentLength++;
    } else {
      longestLength = Math.max(longestLength, currentLength);
      currentLength = 1;
    }
  }
  return longestLength;
};

// console.log(bruteForceSolution(nums));

const optimisedSolution = (nums: number[]) => {
  const HASHSET = new Set(nums);
  let longest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!HASHSET.has(nums[i] - 1)) {
      let length = 0;

      while (HASHSET.has(nums[i] + length)) {
        length++;
      }
      longest = Math.max(longest, length);
    }
  }
  return longest;
};

console.log(optimisedSolution(nums));
// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(nums));
