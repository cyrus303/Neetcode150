/*
575 · Decode String

Description
Given an expression s contains numbers, letters and brackets. Number represents the number of repetitions inside the brackets(can be a string or another expression)．Please expand expression to be a string.

Example
Example1

Input: S = abc3[a]
Output: "abcaaa"
Example2

Input: S = 3[2[ad]3[pf]]xyz
Output: "adadpfpfpfadadpfpfpfadadpfpfpfxyz
*/

import {join} from 'path';

export {};

const S = 'abc3[ac]';

const bruteForceSolution = (S: string) => {
  console.log('input ->', S);
  const STACK: string[] = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] !== ']') {
      STACK.push(S[i]);
    } else {
      let subString: string | undefined = '';
      while (STACK[STACK.length - 1] !== '[') {
        subString = STACK.pop() + subString;
      }
      console.log('subString', subString);
      STACK.pop();

      let k: any = '';
      while (STACK.length > 0 && !isNaN(+STACK[STACK.length - 1])) {
        k = STACK.pop();
      }
      STACK.push(subString.repeat(parseInt(k)));
    }
  }
  return STACK.join('');
};

console.log(!isNaN(+'2'));

console.log(bruteForceSolution(S));

// const optimisedSolution = (arr: number[]) => {};

// console.log(optimisedSolution(arr1));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
