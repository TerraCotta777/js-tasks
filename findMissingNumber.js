function findMissingNumber(array) {
  // Firstly, sorting array will help us follow the sequence easier
  array.sort((a, b) => a - b);
  // and remove all duplicate numbers
  const uniqueArray = Array.from(new Set(array));
  // Secondly, iterate over sorted array
  for (let i = 1; i < uniqueArray.length; i++) {
    // and check if current element is not the expected one
    if (uniqueArray[i] !== ++uniqueArray[i - 1]) {
      // then return expected element
      return uniqueArray[i] - 1;
    }
  }
  // if no missing numbers were found, return this statement
  return "There is no missing number";
}

console.log(findMissingNumber([5, 0, 1, 3, 2])); // expected output - 4
console.log(findMissingNumber([7, 9, 10, 11, 12])); // expected output - 8
console.log(findMissingNumber([111, 113, 115, 114, 112, 117])); // expected output - 116
console.log(findMissingNumber([34, 29, 32, 33, 31, 28])); // expected output - 30
console.log(findMissingNumber([657, 652, 654, 656, 653])); // expected output - 655
console.log(findMissingNumber([1, 1, 3, 4, 5])); // expected output - 2
console.log(findMissingNumber([15])); // expected output - 'There is no missing number'
console.log(findMissingNumber([-3, -2, -1, 1, 2, 3])); // expected output - 0
console.log(findMissingNumber([])); // expected output - 'There is no missing number'
