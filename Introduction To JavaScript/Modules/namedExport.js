
let availableAirplanes  = [];

availableAirplanes.push({
  	name: 'AeroJet',
  	fuelCapacity: 800,
  	availableStaff:['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 	'sensorOperators']
});

availableAirplanes[1] = {
  	name: 'SkyJet',
  	fuelCapacity: 500,
  	availableStaff: ['pilots', 'flightAttendants']
};

let flightRequirements = {
  requiredStaff: 4
}; 

function meetsStaffRequirements(availableStaff, requiredStaff ) {
  if (availableStaff.length > requiredStaff ) {
		return true;
	} else {
    return false;
  }
}

export {availableAirplanes, flightRequirements, meetsStaffRequirements};