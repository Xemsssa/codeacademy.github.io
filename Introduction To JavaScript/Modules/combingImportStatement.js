//import {aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs } from './airplane';
import {availableAirplanes, flightRequirements, meetsStaffRequirements } from './airplane';
import meetsSpeedRangeRequirements from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function (element) {
    //console.log('Fuel Capacity of ' + element.name +': ' + element.fuelCapacity);
     console.log(`Fuel Capacity of ${element.name}: ${element.fuelCapacity}`);
  });

}

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(element.name +  ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
  })
}

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(element.name + 'meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}

displayFuelCapacity();
displayStaffStatus();
displaySpeedRangeStatus()