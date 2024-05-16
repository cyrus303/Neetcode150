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

const s = 'cabwefgewcwaefgcf';
const t = 'cae';

const bruteForceSolution = (s: string, t: string) => {
  //fails certain test cases and timeout error
  console.log('Input -> s:', s, 't:', t);

  if (t.length > s.length) return '';

  const inputHash: Record<string, number> = {};
  let left = 0;
  let right = t.length;
  let minStr = '';
  let minLen = 0;

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
      if (!(key in windowHash) || windowHash[key] < inputHash[key]) {
        right++;
        allKeysPresent = false;
      }
    }

    if (allKeysPresent) {
      if (windowStr.length < minLen || minLen === 0) {
        minLen = windowStr.length;
        minStr = windowStr;
      }
      left++;
    }
  }

  return minStr;
};

// console.log(bruteForceSolution(s, t));

const optimisedSolution = (s: string, t: string) => {
  console.log('Input -> s:', s, 't:', t);

  if (t == '') return '';

  const countT: Record<string, number> = {};
  const window: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {
    countT[s[i]] = (countT[s[i]] || 0) + 1;
  }

  let have = 0;
  let need = Object.keys(countT).length;
  let result: number[] = [-1, -1];
  let resultLen = Infinity;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    window[char] = (window[char] || 0) + 1;

    if (countT[char] !== undefined && window[char] === countT[char]) {
      have++;
    }

    while (have == need) {
      console.log('have,need,reslen', have, need, resultLen);
      if (right - left + 1 < resultLen) {
        result = [left, right];
        resultLen = right - left + 1;
      }

      window[s[left]] -= 1;

      if (
        countT[s[left]] !== undefined &&
        window[s[left]] < countT[s[left]]
      ) {
        have--;
      }
      left++;
    }
  }
  console.log(result);
};

console.log(optimisedSolution(s, t));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
