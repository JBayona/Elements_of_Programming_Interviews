/*
Move at the very beginning even numbers and then odd numbers.
*/

function evenOdd(array) {
  let indexEven  = 0;
  let indexOdd = array.length - 1;
  let tmp = 0;
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
      tmp = array[indexEven];
      array[indexEven++] = array[i];
      array[i] = tmp;
    } else {
      tmp = array[indexOdd];
      array[indexOdd--] = array[i];
      array[i] = tmp;
    }
  }
  return array;
}

array = [2, 4, 5, 2, 7, 8, 11, 20, 4, 81, 97, 100];
console.log(evenOdd(array));