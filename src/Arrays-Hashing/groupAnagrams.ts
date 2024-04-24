/*
49. Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:

Input: strs = [""]
Output: [[""]]

Example 3:

Input: strs = ["a"]
Output: [["a"]]


Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/

export {};

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

const bruteForceSolution = (strs: string[]) => {
  const HASH: Record<any, any> = {};

  console.log('input ->', strs);
  const sortedInput = strs.map((str) => {
    return str.split('').sort().join('');
  });

  for (let i = 0; i < sortedInput.length; i++) {
    if (HASH[sortedInput[i]] === undefined) {
      HASH[sortedInput[i]] = [strs[i]];
    } else {
      HASH[sortedInput[i]].push(strs[i]);
    }
  }

  console.log('sortedInput ->', sortedInput);

  return Object.values(HASH);
};

console.log(bruteForceSolution(strs));

// const optimisedSolution = (arr: number[]) => {};

// console.log(optimisedSolution(arr1));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
