let person = {
  "name": "Andrzej",
  "age": 31,
  "weekendAlarm": 'No alarms needed',
  "weekAlarm": 'Alarm set to 7AM' 
}

person.hobbies = ["programming", "running"];

console.log(person.name);
console.log(person.age);

console.log(person['name']);
console.log(person['age']);

let day = "Thuesday";

let alarm;

if (day === "Saturday" || day === "Sunday") {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);
console.log(person.hobbies);