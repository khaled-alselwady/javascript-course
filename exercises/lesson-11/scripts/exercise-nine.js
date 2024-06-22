function removeAllEgg(foods) {
  if (!foods && foods.length < 1) {
    return [];
  }

  const result = [];

  foods.forEach(food => {
    if (food !== 'egg') {
      result.push(food);
    }
  });

  return result;
}

function removeFirstTwoEggs(foods) {
  if (!foods) {
    return [];
  }

  const result = [];
  let eggsRemoved = 0;

  foods.forEach(food => {
    if (food !== 'egg' || eggsRemoved >= 2) {
      result.push(food);
    }
    else {
      eggsRemoved++;
    }
  });

  return result;
}

function reverseArray(array) {
  if (!array && array.length < 1) {
    return [];
  }

  const reverseArray = [];
  const arrayLegnth = array.length;

  for (let i = arrayLegnth - 1; i >= 0; i--) {
    reverseArray[arrayLegnth - i - 1] = array[i];
  }

  return reverseArray;
}

function removeLastTwoEggs(foods) {
  if (!foods) {
    return [];
  }

  const result = [];
  let eggsRemoved = 0;

  for (let i = foods.length - 1; i >= 0; i--) {
    if (foods[i] !== 'egg' || eggsRemoved >= 2) {
      result.push(foods[i]);
    }
    else {
      eggsRemoved++;
    }
  }

  //return result.reverse();
  return reverseArray(result);
}

const foods = ['egg', 'apple', 'egg', 'egg', 'ham', 'egg'];
console.log(foods);
console.log(removeAllEgg(foods));
console.log(removeFirstTwoEggs(foods));
console.log(removeLastTwoEggs(foods));