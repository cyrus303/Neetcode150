/*
give an nested input array, flatten the array

input -> arr = [1,2,3,[4,[5,6]],7,8]

*/

export {};

const numbers = [1, 2, 3, true, [4, [5, 6]], 7, 8];

type NestedArray = (any | NestedArray)[];

const bruteForceSolution = (arr: NestedArray) => {
  console.log('Input ->', numbers);
  return arr.flat(2);
};

// console.log(bruteForceSolution(numbers));
const flattenArr: NestedArray = [];

const optimisedSolution = (arr: NestedArray) => {
  console.log('Input ->', arr);
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      optimisedSolution(arr[i]);
    } else {
      flattenArr.push(arr[i]);
    }
  }
};

console.log(optimisedSolution(numbers));
console.log(flattenArr);
// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
