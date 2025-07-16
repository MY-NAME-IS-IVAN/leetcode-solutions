// Description: Write a function createHelloWorld. It should return a new function that always returns "Hello World".
// Link: https://leetcode.com/problems/create-hello-world-function/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Time complexity: O(1)
// Space complexity: O(1)

function createHelloWorld() {
  return function (...args): string {
    return 'Hello World';
  };
}