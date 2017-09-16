Learn JavaScript: Loops



main.js

1
let vacationSpots = ["Wroclaw", "London", "Tokyo"];
2
​
3
for (let vacationSpotIndex = vacationSpots.length - 1; vacationSpotIndex >= 0; vacationSpotIndex--) {
4
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
5
}