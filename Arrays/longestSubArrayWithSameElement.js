function longestConsecutive(array) {
  let result = 0;
  let count = 1;
  for(let i = 1; i < array.length; i++) {
    if(array[i] === array[i - 1]) {
      count++;
    } else {
      result = Math.max(count, result);
      count = 1;
    }
  }
  return result;
}

array = [1,2,2,3,5,6,7,7,7,7,7,7,5,4,1,2];
console.log(longestConsecutive(array));