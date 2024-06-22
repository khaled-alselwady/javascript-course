function countWords(words) {
  if (!words || words.length < 1) {
    return {};
  }

  const countOfEachWord = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (!countOfEachWord[word]) {
      // New word
      countOfEachWord[word] = 1;
    }
    else {
      // Existing word
      countOfEachWord[word]++;
    }
  }

  return countOfEachWord;
}

const words = ['apple', 'grape', 'apple', 'apple'];
console.log(words);
console.log(countWords(words));