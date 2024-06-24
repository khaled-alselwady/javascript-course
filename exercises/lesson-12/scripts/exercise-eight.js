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

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));