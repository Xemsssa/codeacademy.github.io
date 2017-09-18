let person = {
  "name": "Andrzej",
  "age": 31,
  "weekendAlarm": 'No alarms needed',
  "weekAlarm": 'Alarm set to 7AM',
  
  sayHello() {
//    return "Hello, there!";
    return `Hello, my name is ${this.name}`;
  },
  
  sayGoodbye() {
  	return "Goodbye!";	
	}
}

let friend = {
  name: "Mike"
}
friend.sayHello = person.sayHello;

person.hobbies = ["programming", "running"];

person.hobbies = ['swimming'];

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

console.log(person.sayHello());

console.log(friend.sayHello());