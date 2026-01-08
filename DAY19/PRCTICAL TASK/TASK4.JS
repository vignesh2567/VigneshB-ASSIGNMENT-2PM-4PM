let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (num) {
  console.log(num * 2);
});

let nums = [1, 2, 3, 4, 5];
let squares = nums.map(function (nums) {
  return nums * nums;
});
console.log(squares);


function processArray(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}
function double(num) {
  return num * 2;
}
let ns = [1, 2, 3, 4];
let output = processArray(ns, double);
console.log(output);


