function removeAllEgg(foods) {
  if (!foods) {
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

const foods = ['egg', 'apple', 'egg', 'egg', 'ham', 'egg'];
console.log(foods);
console.log(removeAllEgg(foods));
console.log(removeFirstTwoEggs(foods));