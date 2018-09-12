/*
Remove duplicates from sorted array in place with no additional space
*/

function removeDuplicatedElementsSortedArray(array) {
  if(array.length === 0) {
    return 0;
  }
  // Write va manteniendo el lugar en donde se debe
  // de insertar el valor que no es igual
  let write = 1;
  for(let i = 1; i < array.length; i++) {
    if(array[write - 1] !== array[i]) {
      array[write++] = array[i]; 
    }
  }
  // Al final queda un arreglo con todos los elementos unicos
  // del lado izquierdo y a la derecha de write los repetidos
  console.log(array);
  return write;
}

array = [1,2,2,2,2,3,3,4,5,5,6,6,7];
console.log(removeDuplicatedElementsSortedArray(array));