/*
42. Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each bar is 1,
compute how much water it can trap after raining.

Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
In this case, 6 units of rain water (blue section) are being trapped.

Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
*/

export {};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

const bruteForceSolution = (height: number[]) => {
  let maxLeft = [];
  let maxRight = [];
  let maxValue = Number.MIN_SAFE_INTEGER;

  let minWater = [];

  for (let i = 0; i < height.length; i++) {
    maxValue = Math.max(maxValue, height[i]);
    maxLeft.push(maxValue);
  }

  maxValue = Number.MIN_SAFE_INTEGER;
  for (let i = height.length - 1; i >= 0; i--) {
    maxValue = Math.max(maxValue, height[i]);
    maxRight[i] = maxValue;
  }

  for (let i = 0; i < height.length; i++) {
    minWater[i] = Math.min(maxLeft[i], maxRight[i]) - height[i];
  }

  let sum = 0;
  minWater.forEach((ele) => {
    sum = sum + ele;
  });

  return sum;
};

console.log(bruteForceSolution(height));

const optimisedSolution = (height: number[]) => {
  console.log('Input ->', height);
  let left = 0;
  let right = height.length - 1;
  let maxLeft = height[left];
  let maxRight = height[right];
  let water = 0;

  while (left < right) {
    if (maxLeft < maxRight) {
      left++;
      maxLeft = Math.max(maxLeft, height[left]);
      water = water + maxLeft - height[left];
    } else {
      right--;
      maxRight = Math.max(maxRight, height[right]);
      water = water + maxRight - height[right];
    }
  }
  return water;
};

console.log(optimisedSolution(height));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
