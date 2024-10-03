// Bubble sort algorithm

let bubble = [64, 25, 12, 22, 11];

function bubbleSort() {
  for (let i = 0; i < bubble.length; i++) {
    if (bubble[i] > bubble[i + 1]) {
      let v1 = bubble[i];
      let v2 = bubble[i + 1];
      bubble[i] = v2;
      bubble[i + 1] = v1;
    }
  }
}

for (let j = 0; j < bubble.length; j++) bubbleSort(); // I used another for to just take array[0] and check all number with the value

console.log(bubble);
