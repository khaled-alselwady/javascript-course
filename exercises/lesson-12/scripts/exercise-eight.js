function removeEgg(foods) {
  if (!foods) {
    return [];
  }

  // return foods.filter((item) => {
  //   if (item !== 'egg') {
  //     return item;
  //   }
  // });

  return foods.filter((food) => food !== 'egg');
}

function removeFirstTwoEggs(foods) {
  if (!foods) {
    return [];
  }

  let eggsRemoved = 0;
  return foods.filter((food) => {
    if (food === 'egg' && eggsRemoved < 2) {
      eggsRemoved++;
      return false;
    }

    return true;
  });
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));
console.log(removeFirstTwoEggs(['egg', 'apple', 'egg', 'egg', 'ham']));