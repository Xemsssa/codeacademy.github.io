
export let availableAirplanes  = [];

availableAirplanes.push({
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff:['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 	'sensorOperators'],
  maxSpeed: 1200,
  minSpeed: 300
});

availableAirplanes[1] = {
  name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ['pilots', 'flightAttendants'],
  maxSpeed: 800,
  minSpeed: 200
};

export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
}; 

export function meetsStaffRequirements(availableStaff, requiredStaff ) {
  if (availableStaff.length > requiredStaff ) {
		return true;
	} else {
    return false;
  }
}

export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  
  if (range > requiredSpeedRange) {
    return true;
  }
  
  return false;
  
}

//export {availableAirplanes, flightRequirements, meetsStaffRequirements};0