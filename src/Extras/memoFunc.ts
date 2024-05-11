/*
give a function add = (a,b) => a + b

memoizedAdd(1,2) -> return 3
if its called first time, calculates the value
for second time, it fetched the value from the cache ranther than computing it again
*/

export {};

const add = (a: number, b: number) => a + b;
const CACHE: Record<string, number> = {};

function memoizedAdd(n: number, m: number) {
  const argArray = Array.from(arguments);
  const key = JSON.stringify(argArray);

  if (key in CACHE) {
    console.log('Accessing CACHE');
    return CACHE[key];
  } else {
    console.log('Computing');
    const result = add(n, m);
    CACHE[key] = result;
    return result;
  }
}

console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(2, 1));

console.log(memoizedAdd(5, 5));
console.log(memoizedAdd(5, 5));
