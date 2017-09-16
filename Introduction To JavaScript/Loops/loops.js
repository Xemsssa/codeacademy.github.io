Learn JavaScript: Loops
Connected to Codecademy


main.js

1
let cards = ['Diamond', 'Spade', 'Heart', 'Club'];
2
​
3
let currentCard  = 'Spade';
4
​
5
while (currentCard !== 'Spade') {
6
  console.log(currentCard);
7
  
8
  currentCard = cards[Math.floor(Math.random() * 4)];
9
       };
10
​
11
console.log(currentCard);