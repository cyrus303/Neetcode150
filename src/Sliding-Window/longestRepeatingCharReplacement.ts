/*
424. Longest Repeating Character Replacement

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
*/

import {count} from 'console';

export {};

const str = 'AABABBA';
const K = 1;

// const bruteForceSolution = (str: string) => {
//   console.log('Input ->', str);
// };

// console.log(bruteForceSolution(str));

const optimisedSolution = (str: string, K: number) => {
  console.log('Input String ->', str, 'K ->', K);

  const HASH: Record<string, number> = {};
  let result = 0;
  let left = 0;

  for (let right = 0; right < str.length; right++) {
    HASH[str[right]] = (HASH[str[right]] || 0) + 1;

    let maxFrequency = Math.max(...Object.values(HASH));

    while (right - left + 1 - maxFrequency > K) {
      HASH[str[left]] -= 1;
      left++;
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
};

console.log(optimisedSolution(str, K));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
