/*
567. Permutation in String
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
In other words, return true if one of s1's permutations is the substring of s2.

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false

Constraints:

1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
*/

import console from 'console';

export {};

const Str1 = 'ab';
const Str2 = 'eidbaooo';

const bruteForceSolution = (Str1: string, Str2: string) => {
  if (Str1.length > Str2.length) return false;
  let i = 0;
  let j = 0;

  Str1 = Str1.split('').sort().join('');

  while (j < Str2.length) {
    j = i + Str1.length;
    let windowStr = Str2.slice(i, j).split('').sort().join('');
    if (windowStr === Str1) {
      return true;
    }

    i++;
  }
  return false;
};

// console.log(bruteForceSolution(Str1, Str2));

const optimisedSolution = (Str1: string, Str2: string) => {
  console.log('Input: Str1 ->', Str1, 'Str2 ->', Str2);
  if (Str1.length > Str2.length) return false;

  let HASH1: Record<string, number> = {};
  let i = 0;
  let j = 0;

  for (let i = 0; i < Str1.length; i++) {
    HASH1[Str1[i]] = (HASH1[Str1[i]] || 0) + 1;
  }

  while (j < Str2.length) {
    j = i + Str1.length;

    let HASH2: Record<string, number> = {};
    let windowStr = Str2.slice(i, j);

    for (let i = 0; i < windowStr.length; i++) {
      HASH2[windowStr[i]] = (HASH2[windowStr[i]] || 0) + 1;
    }

    let isPermutation = true;
    for (const char in HASH1) {
      if (HASH1[char] !== HASH2[char]) {
        isPermutation = false;
        break;
      }
    }

    if (isPermutation) {
      return true;
    }

    i++;
  }
  return false;
};

// console.log(optimisedSolution(Str1, Str2));

const optimalSolution = (Str1: string, Str2: string) => {
  console.log('Input: Str1 ->', Str1, 'Str2 ->', Str2);

  const n1 = Str1.length;
  const n2 = Str2.length;

  if (n1 > n2) return false;

  let s1_counts = new Array(26).fill(0);
  let s2_counts = new Array(26).fill(0);

  for (let i = 0; i < n1; i++) {
    s1_counts[Str1.charCodeAt(i) - 97] += 1;
    s2_counts[Str2.charCodeAt(i) - 97] += 1;
  }

  for (let i = n1; i <= n2; i++) {
    if (JSON.stringify(s1_counts) === JSON.stringify(s2_counts))
      return true;
    s2_counts[Str2.charCodeAt(i) - 97] += 1;
    s2_counts[Str2.charCodeAt(i - n1) - 97] -= 1;
  }

  return false;
};

console.log(optimalSolution('adc', 'dcda'));
