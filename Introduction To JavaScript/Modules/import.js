import Airplane from './airplane';

function displayFuelCapacity() {
  //forEach(airplane in Airplane.availableAirplanes) {
  Airplane.availableAirplanes.forEach(function (element) {
    //console.log('Fuel Capacity of ' + element.name +': ' + element.fuelCapacity);
     console.log(`Fuel Capacity of ${element.name}: ${element.fuelCapacity}`);
  });

}

displayFuelCapacity();