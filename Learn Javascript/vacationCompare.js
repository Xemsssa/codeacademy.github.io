var myPlaces = [
  'Krakow',
  'London',
  'Tokio'
];

var friendPlaces = [
  'Berlin',
  'France',
  'London'
];

for (var i = 0; i < myPlaces.length; i++) {
  //console.log(myPlaces[i]);
  for (var j = 0; j < friendPlaces.length; j++) {
    //console.log(friendPlaces[j]);
    if (myPlaces[i] === friendPlaces[j]) {
      console.log(myPlaces[i]);
    } else {
      console.log('Error');
    }
  }
 
}