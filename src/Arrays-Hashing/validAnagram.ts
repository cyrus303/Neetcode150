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

const bruteForceSolution = (str1: string, str2: string) => {
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
};

console.log(bruteForceSolution(str1, str2));

// BigO(n) = O(slogn) -> sorting take logn , Space = O(1)

const generateHash = (str: string, HASH: any) => {
  str.split('').map((ele) => {
    HASH[ele] = (HASH[ele] || 0) + 1;
  });
};

const optimisedSolution = (str1: string, str2: string) => {
  const HASH1: Record<string, number> = {};
  const HASH2: Record<string, number> = {};

  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    HASH1[str1[i]] = (HASH1[str1[i]] || 0) + 1;
    HASH2[str2[i]] = (HASH2[str2[i]] || 0) + 1;
  }

  for (const key in HASH1) {
    if (HASH1[key] !== HASH2[key]) {
      return false;
    }
  }

  return true;
};

console.log(optimisedSolution(str1, str2)); // BigO(n) = O(s+t) = O(n) , Space = O(1), only 26 key value pairs can be present

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
