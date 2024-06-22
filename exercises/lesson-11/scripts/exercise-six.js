function addOne(array) {
  if (!array) {
    return;
  }

  for (let i = 0; i < array.length; i++) {
    array[i]++;
  }

  return array;
}

const numbers = [1, 2, 3, -6, 0];
console.log(numbers);
console.log(addOne(numbers));