let words = ["elefante", "cão", "borboleta", "gato"];

function orderWords() {
  for (let j = 0; j < words.length; j++) {
    for (let i = 0; i < words.length - 1; i++) {
      if (words[i].length > words[i + 1].length) {
        let temp = words[i];
        words[i] = words[i + 1];
        words[i + 1] = temp;
      }
    }
  }

  console.log(words);
}

orderWords();
