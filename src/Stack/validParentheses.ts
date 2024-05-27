/*
20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true
Example 3:


Input: s = "(]"
Output: false

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/
export {};

const s = '()[]{}';

const bruteForceSolution = (s: string) => {
  console.log('input ->', s);

  const STACK: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      STACK.push(s[i]);
    } else if (s[i] === ')' && STACK[STACK.length - 1] === '(') {
      STACK.pop();
    } else if (s[i] === ']' && STACK[STACK.length - 1] === '[') {
      STACK.pop();
    } else if (s[i] === '}' && STACK[STACK.length - 1] === '{') {
      STACK.pop();
    } else {
      return false;
    }
  }
  return STACK.length === 0;
};

console.log(bruteForceSolution(s));

// const optimisedSolution = (arr: number[]) => {};

// console.log(optimisedSolution(arr1));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));

class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  push(element: T) {
    this.items.push(element);
  }

  pop(): T | undefined {
    if (this.items.length === 0) {
      return undefined;
    }
    return this.items.pop();
  }

  size(): number {
    return this.items.length;
  }

  peak(): T {
    return this.items[this.items.length - 1];
  }

  isEmpty(): Boolean {
    return this.items.length === 0;
  }
}

let myStack = new Stack();

myStack.push(1);
myStack.push(1);
myStack.push(2);
myStack.pop();

// console.log(myStack);
