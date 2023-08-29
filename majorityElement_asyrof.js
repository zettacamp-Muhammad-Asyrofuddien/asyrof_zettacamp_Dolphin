/**
 * write a function that returns the majority element.
 * The majority element is the element that appears more than other element.
 * READ EXAMPLE BELOW!

console.log(majorityElement([3, 2, 3])); // Output: 3 
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 

 * You may assume that the majority element always exists in the array.

 * Returns the majority element from the input array of integers.

 * @param {number[]} nums - The input array of integers.
 * @return {number} Returns the majority element.
 */
function majorityElement(nums) {
  // Your logic here
  let majority = nums[0]; // mulai dari awal indeks
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    // console.log(majority + ' ' + count);
    if (count === 0) {
      majority = nums[i];
      count = 1;
    } else if (majority === nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  // console.log(count);
  if (count == 0) return 'Element Sama Banyak';
  else return majority;
}

console.log(majorityElement([3, 2, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
// console.log(majorityElement([1, 1, 2, 2, 1, 1, 1, 2, 2])); // Output: 2