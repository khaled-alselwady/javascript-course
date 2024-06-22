function arraySwap(array) {
  if (!array || array.length < 1) {
    return [];
  }

  const temp = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = temp;

  return array;
}

const array = [10, 20, 40, 30];
console.log(array);
console.log(arraySwap(array));