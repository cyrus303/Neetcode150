/*
125. Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true

Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

export {};

const str = 'racecar;';

const bruteForceSolution = (str: string) => {
  const cleanedString = str
    .replaceAll(/[^a-zA-Z0-9]/g, '')
    .toLowerCase();

  for (let i = 0; i < cleanedString.length / 2; i++) {
    let j = cleanedString.length - i - 1;
    if (cleanedString[i] !== cleanedString[j]) {
      return false;
    }
  }
  return true;
};

// console.log(bruteForceSolution(str));

const optimisedSolution = (str: string) => {
  const cleanedStr = str.toLowerCase().replaceAll(/[^a-z0-9]/g, '');
  let i = 0;
  let j = cleanedStr.length - 1;

  while (i < j) {
    if (cleanedStr[i] !== cleanedStr[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

console.log(optimisedSolution(str));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
