/*
659 · Encode and Decode Strings

Description

Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Please implement encode and decode

Example
Example1

Input: ["lint","code","love","you"]
Output: ["lint","code","love","you"]
Explanation:
One possible encode method is: "lint:;code:;love:;you"
Example2

Input: ["we", "say", ":", "yes"]
Output: ["we", "say", ":", "yes"]
Explanation:
One possible encode method is: "we:;say:;:::;yes"
*/

export {};

const str = ['lint', 'code', 'love', 'you'];

const encode = (str: string[]): string => {
  const encodedStr = str.map((ele) => {
    let count = ele.length;
    return count + '#' + ele;
  });

  return encodedStr.join('');
};

const decode = (str: string): string[] => {
  const decodedStr: string[] = [];

  let i = 0;
  let length = 0;

  while (i < str.length) {
    let j = i;
    while (str[j] !== '#') {
      j++;
    }
    length = parseInt(str.slice(i, j));
    decodedStr.push(str.slice(j + 1, j + 1 + length));
    i = j + 1 + length;
  }

  return decodedStr;
};

const bruteForceSolution = (str: string[]) => {
  console.log('Input Str ->', str);

  const encodedStr = encode(str);
  console.log('EncodedStr ->', encodedStr);

  const decodeStr = decode(encodedStr);
  console.log('DecodedStr ->', decodeStr);
};

console.log(bruteForceSolution(str));

// const optimisedSolution = (arr: number[]) => {};

// console.log(optimisedSolution(arr1));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
