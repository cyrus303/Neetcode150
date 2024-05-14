/*
76. Minimum Window Substring

Given two strings s and t of lengths m and n respectively, return the minimum window
substring of s such that every character in t (including duplicates) is included
in the window. If there is no such substring, return the empty string "".

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.

Follow up: Could you find an algorithm that runs in O(m + n) time?
*/

export {};

const s = 'a';
const t = 'b';

const bruteForceSolution = (s: string, t: string) => {
  console.log('Input -> s:', s, 't:', t);
  if (t.length > s.length) return '';

  const inputHash: Record<string, number> = {};
  let left = 0;
  let right = t.length;
  let minStr = '';

  for (let i = 0; i < t.length; i++) {
    inputHash[t[i]] = (inputHash[t[i]] || 0) + 1;
  }

  while (right <= s.length) {
    const windowHash: Record<string, number> = {};
    let windowStr = s.slice(left, right);

    for (let i = 0; i < windowStr.length; i++) {
      windowHash[windowStr[i]] = (windowHash[windowStr[i]] || 0) + 1;
    }

    let allKeysPresent = true;
    for (let key in inputHash) {
      if (!(key in windowHash)) {
        right++;
        allKeysPresent = false;
      }
    }

    if (allKeysPresent) {
      minStr = windowStr;
      left++;
    }
  }

  return minStr;
};

console.log(bruteForceSolution(s, t));

// const optimisedSolution = (arr: number[]) => {};

// console.log(optimisedSolution(arr1));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
