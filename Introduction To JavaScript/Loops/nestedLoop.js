let myPlaces = ["Wroclaw", "London", "Tokyo"];

let friendPlaces = ["London", "Paris", "NY"];

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {
//  console.log(myPlaces[myPlacesIndex]);
  
  for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++ ) {
   // console.log(friendPlaces[friendPlacesIndex]);
    
    if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
        console.log(myPlaces[myPlacesIndex]);
        }
  }
}