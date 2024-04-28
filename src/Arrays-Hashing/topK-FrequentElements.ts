/*
347. Top K Frequent Elements
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:

Input: nums = [1], k = 1
Output: [1]

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.


Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

export {};

const arr1 = [1, 1, 1, 2, 2, 3, 3, 3, 3, 3];
const K = 2;

const bruteForceSolution = (arr: number[], K: number) => {
  const HASH: Record<number, number> = {};
  for (let i = 0; i < arr.length; i++) {
    HASH[arr[i]] = (HASH[arr[i]] || 0) + 1;
  }

  let sorted = Object.entries(HASH).sort((a, b) => b[1] - a[1]);

  const values = sorted.slice(0, K).map(([key, value]) => key);
  console.log('HASH ->', HASH);
  console.log('sorted ->', sorted);

  // return values;
};

console.log(bruteForceSolution(arr1, K));

// const optimisedSolution = (arr: number[]) => {};

// console.log(optimisedSolution(arr1));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
