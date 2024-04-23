/*
242. Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/

import console from 'console';

export {};

const str1 = 'anagram';
const str2 = 'nagaram';

// const bruteForceSolution = (str1: string, str2: string) => {

// };

// console.log(bruteForceSolution(str1, str2));

const generateHash = (str: string, HASH: any) => {
  str.split('').map((ele) => {
    HASH[ele] = (HASH[ele] || 0) + 1;
  });
};

const optimisedSolution = (str1: string, str2: string) => {
  const HASH1: Record<string, number> = {};
  const HASH2: Record<string, number> = {};

  if (str1.length !== str2.length) return false;

  generateHash(str1, HASH1);
  generateHash(str2, HASH2);

  for (const key in HASH1) {
    if (HASH1[key] !== HASH2[key]) {
      return false;
    }
  }

  return true;
};

console.log(optimisedSolution(str1, str2));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
