const numbers = [1, 2, 3];

const arrayPlusOne = [];

for (let i = 0; i < numbers.length; i++) {
  //arrayPlusOne[i] = numbers[i] + 1;
  arrayPlusOne.push(numbers[i] + 1);
}

console.log(numbers);
console.log(arrayPlusOne);