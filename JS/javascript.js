javascript 

"Andrzej"

"Andrzej".length

3 + 4

"cake".length

confirm("I feel  awesome!");
confirm("I am ready to go.");

prompt("What is your name?");
prompt("What is Ubuntu?");

prompt("Where are you from?");

var string = "Hello from Andrzej";

"string".length;
string.length;

// var string = "I'm coding lake a champ";

// var num = string.length;
// //console.log(num);
// if (num > 10) 
// {
//     console.log("true");    
// }

"I'm coding like a champ".length > 10;

console.log(2 * 5);
console.log("Hello");

// Here is an example of using the greater than (>) operator.
console.log(15 > 4); // 15 > 4 evaluates to true, so true is printed.

// Fill in with >, <, === so that the following print out true:
console.log("Xiao Hui".length < 122);
console.log("Goody Donaldson".length > 8);
console.log(8*2 === 16);

if ("Andrzej",length > 7) 
{
	console.log("YEs");
}

if ("myName" >= 7 ) 
{
    console.log("Let's go down the first road!");
}
else 
{
    // What should we do if the condition is false? Fill in here:
    console.log("Let's go down the second road!");
    
}

// Remember, the order and punctuation matter.
// If you get an error, check carefully, line by line.
// If you're really stuck, click "Stuck? Get a hint!"
var string = "day";
if (string !== "day")
{
    console.log("The condition is true");
}
else
{
    console.log("The condition is false");
}

if (10 === 10)
{
    console.log("You got a true!");
} else {
    console.log("You got a false!");
}

if (12 / 4 === "Ari".length) {
	confirm("Will this run the firsrt block?");
} else {
	confirm("Or the second block?");
}

if ("Joe".length * 2 / (2 + 1) === 2)
{
	console.log("The answer makes sense!");
}
else
{
	console.log("Error Error Error");
}

console.log(14 % 3);
console.log(99 % 8);
console.log(11 % 3);

if ( 10 % 2 !== true) {
	console.log("The firsrt number is even");
} else {
	console.log("the firsrt number is odd");
}

"batman".substring(0, 3);
"laptop".substring(3, 6);

"wonderful day".substring(3,7);

console.log("January".substring(0,3));
console.log("Melbourne is great".substring(0,12));
console.log("Hamburgers".substring(3));

 var varName = data;

 var maName = "Leng";
 var myAge = 30;
 var isOdd = true;

var myAge = 30;

var myName = "Steve Jobs";

myName.substring(0, 5);


 var myCountry = "Zytomierz";

 console.log(myCountry.length);

 console.log(myCountry,substring(0, 3));

var myName = "Andrzej";

console.log(myName);

myName = myName.substring(0, 2);

console.log(myName);

var myColor = "blue";

console.log(myColor.length);

// Not sure where to begin? Check the Hint!
var myName = "Andrzej";
if (myName === "Andrzej")
{
    console.log("I finished my first course!");
}
else
{
     console.log("ERROR");    
}

var isEven = function(number) {
    // Your code goes here!

    if (number% 2 === 0) {
        //console.log number;
        return true;
    } else {
        return false;
    }

};
isEven();


var isEven = function(number) {
    // Your code goes here!

    if (number % 2 === 0) {
        //console.log number;
        return true;
    } else if (isNaN(number)) {
        return "Its not a number!";
    } else {
        return false;
    }

};
isEven();

var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch) {
    case 'sandwich':
        console.log("Sure thing! One sandwich,coming up.");
        break;
    case 'soup':
        console.log("Got it! Tomato's my favorite.");
        break;
    case 'salad':
        console.log("Sound good! How about caesar salad?");
        break;
    case 'pie':
        console.log("Pie's not e meal!");
        break;
    default:
        console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
        break;
}

var color = prompt("Wghat's your favorite primary color?", "Type your favorite color here");

switch (color) {
    case 'red':
        console.log("Red's s good color!");
        break;
    case 'blue':
        console.log("That's my favorite color,too!");
        break;
    case 'yellow':
        console.log("Color of the sun!");
        break;
    default:
        console.log("I don't think that's a primaty color");
}


var candy = prompt("What's your favorite candy?", "Type your favorite candy here.");

switch (candy) {
    case 'licorice':
        console.log("Gross!");
        break;
    case 'gum':
        console.log("I like gum!");
        break;
    case 'beets':
        console.log("...is that even a candy?");
        break;
    default:
        console.log("I don't know...");
        break;
}

var answer = prompt("Add your question here!");

switch(answer) {
    case 'yes':
        console.log("Wow you agree!");
        break;
    // Add your code here!
    case 'no':
        console.log("Why not?!");
        break;
    default :
        console.log("What did you write?");
        break;

}


// Write your code below!
var num = prompt();

switch (num) {
    case '1':
        console.log("One");
        break;
    case '2':
        console.log("Two");
        break;
    case '3':
        console.log("Three");
    default:
        console.log("You forget to write...");
        break;
}


var iLoveJavascript = true;
var iLoveLearning = true;

if (iLoveJavascript && iLoveLearning) {
    console.log("Awesome! Let's keep learning!");
} else if (!(iLoveJavascript || iLoveLearning)) {
    console.log("Let's se if we csn change your mind.");
} else {
    console.log("You only like one but nit the other? We'll work on it);
}


// Declare your variables here!
var hungry = true;
var foodHere = true;

var eat = function() {
    // Add your if/else statement here!
    if (hungry && foodHere) {
        return true;
    } else {
        return false;
    }
};


// Declare your variables here!
var tired = false;
var bored = true;



var nap = function() {
    // Add your if/else statement here!
    if (tired || bored) {
        return true;
    } else {
        return false;
    }
    var user = prompt("Hello! Ask?").toLowerCase();

    switch (user) {
        case 'YES':
            console.log("OK!");
            break;
        case 'NO':
            console.log("Why not?");
            break;
        case 'WTF':
            console.log("OMG!!!");
            break;
        default:
            console.log("You didn't enter nothing!");
    }
};

var list = ['one', 2, true, 'Andrzej'];


var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

console.log(languages[2]);





// Declare your variables here!
var programming = false;

var happy = function() {
    // Add your if/else statement here!
    if (programming !== true) {
        return true;
    } else {
        return false;
    }
};


var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

for (var i = 0; i < languages.length; i++) {
    console.log(languages[i]);
}


var newArray = [[1,3,4],
    [2,3,6],
    [3,4,6]];


var jagged = [
    [1,2,3],[4,5,6,7],'Andrzej',
    ['one', 'two', 'four'],
];

console.log(jagged);


var phonebookEntry = {};

phonebookEntry.name = "Oxnard Montalvo";
phonebookEntry.number = '(555) 555-5555';

phonebookEntry.phone = function () {
    console.log('Calling ' + this.name + ' at ' + this.number + '...');
}

phonebookEntry();


var me = {
    //key: value,
    //key: value,
    name: 'Andrzej',
    age: 29
};

var me = new Object();
me.name = 'Andrzej';
me.age = 29;

var object1 = new Object();
var object2 = new Object();
var object3 = new Object();

object1.name = 'chair';
object2.heigth = 120;
object3.color = 'green';

console.log(object1);


var Object = {
    name: "chair",
heigth: 120,
color: "green"
};
var object1 = new Object();
var object2 = new Object();
var object3 = {
    color: "green"
};

//object1.name = 'chair';
//object2.heigth = 120;
//object3.color = 'green';

console.log(object1);


var bool = true;
var myObj = {
    type: 'fancy',
    disposition: 'sunny'
};

var myArray = [2, bool, 'Andrzej', myObj];


var bool = true;
var myObj = {
    name: 'his',
    color: 'green'
}

var newArray = [
    [1,2,3, bool],
    [3, true, myObj]
];

console.log(newArray);


var myObject = {
    name: 'Eduardo',
    type: 'Most excellent',
    // Add your code here!
    interests: ['books', 'music', 'films']
};


var myOwnObject = {
    color: "red",
    year: 5,
    name: "thing"
}

var myOwnObject = {}
myOwnObject.color = "red";
myOwnObject.year = 5;
myOwnObject.name = "thing";

console.log(myOwnObject);  

var friends = {
    bill: {},
    steve: {}
};

var friends = {};
var friends = new Object();

friends[bill] = {};
friend.steve = {};


var friend = new Object();

friend.bill = new Object();
friend.steve = new Object();

(((3 * 90) === 270) || !(false && (!false)) || "bex".toUpperCase() === "BEX");
(((3 * 90) === 270) || !(false && (!false)) || "bex".toUpperCase() === "BEX");

var answer  = true;


// Here is an array of multiples of 8. But is it correct?
var multiplesOfEight = [8,16,24,32,40,58];

// Test to see if a number from the array is NOT a true
// multiple of eight. Real multiples will return false.
for (var i = 0; i < multiplesOfEight.length; i++) {
    var answer = multiplesOfEight[i] % 8 !== 0;
    console.log(answer);
};


for (var i = 1; i <= 20; i++ ) {
    //if (i % 3 === 0) {
    if (i % 3 === 0 && i % 5 === 0) {   
        console.log("FizzBuzz");
        //console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
            } else if (i % 3 === 0) {
                console.log("Fizz");
                } else {
                    console.log(i);
                    }        
    };


var getReview = function (movie) {
    switch (movie) {
        case 'Toy Story 2':
            return "Great story. Mean prospector.";
            break;
        case "Finding Nemo":
            return "Cool animation, and funny turtles.";
            break;
        case "The Lion King":
            return "Great songs.";
            break;
        default:
            return "I don't know!";
        }

};

getReview('Toy Story 2');


var bob = {};

var Spencer = {
  age: 22,
  country: "United States"
};

// make your own object here called me
var me = {
    age: 29,
    country: "Zytomierz"
    }


var bob = {
  name: "Bob Smith",
  age: 30
};
var susan = {
  name: "Susan Jordan",
  age: 25
};
// here we save Bob's information
var name1 = bob.name;
var age1 = bob.age;
// finish this code by saving Susan's information
var name2 = susan.name;
var age2 = susan.age;


// Take a look at our next example object, a dog
var dog = {
  species: "greyhound",
  weight: 60,
  age: 4
};

var species = dog["species"];
// fill in the code to save the weight and age using bracket notation
var weight = dog["weight"];
var age = dog["age"];


// Our bob object again, but made using a constructor this time 
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;
// Here is susan1, in literal notation
var susan1 = {
  name: "Susan Jordan",
  age: 24
};
// Make a new susan2 object, using a constructor instead
var susan2 = new Object();
susan2.name = "Susan Jordan";
susan2.age = 24;


// help us make snoopy using literal notation
// Remember snoopy is a "beagle" and is 10 years old.
var snoopy = {
    species: "beagle",
    age: 10
    }

// help make buddy using constructor notation
// buddy is a "golden retriever" and is 5 years old
var buddy = new Object();
buddy.species = "golden retriever";
buddy.age = 5;


var bicycle = {
    speed: 0,
    gear: 1,
    frame_material: "carbon fiber"
    }
    
    
var square = function (x) {
	return x * x;
};

// Write the function multiply below
// It should take two parameters and return the product
var multiply = function (x, y) {
    return x * y; 
    }

multiply(2,3);

var bob = new Object();
bob.name = "Bob";
bob.age = 30;

bob.setAge = function(newAge) {
	bob.age = newAge;
};

bob.setAge(20);


var bob = new Object();
bob.age = 17;

bob.setAge = function(newAge) {
	bob.age = newAge;
};

bob.getYearOfBirth = function () {
	return 2014 - bob.Age;
};

console.log(bob.getYearOfBirth());


var setAge = function (newAge) {
	this.age = newAge;
};

var bob = new Object();
bob.age = 30;

bob.setAge = setAge;

bob.setAge(50);


// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
bob.setAge = setAge;
  
// make susan here, and first give her an age of 25
var susan = new Object();
susan.age = 25;
susan.setAge = setAge;
// here, update Susan's age to 35 using the method
susan.setAge(35);


var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;

//console.log(rectangle);
// here is our method to set the height
rectangle.setHeight = function (newHeight) {
  this.height = newHeight;
};
// help by finishing this method
rectangle.setWidth = function (newWidth) {
	this.width = newWidth;
};
console.log(rectangle);
// here change the width to 8 and height to 6 using our new methods
//rectangle.heigth = rectangle.setHeight;
//rectangle.width = rectangle.setWidth;
rectangle.setHeight(6);
rectangle.setWidth(8);

console.log(rectangle);


var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
  return this.sideLength * 4;
};
// help us define an area method here
square.calcArea = function () {
    return this.sideLength * this.sideLength;
    }

var p = square.calcPerimeter(3);
var a = square.calcArea(3);


var bob = new Object();

bob.name = "Bob Smith";
bob.age = 20;

function Person (name, age) {
	this.name = name;
	this.age = age;
}

var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
var george = new Person("George Washington", 275);


function Cat(age, color) {
  this.age = age;
  this.color = color;
}

// make a Dog constructor here
function Dog(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
    }


function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally = new Person("Sally Bowles", 39);
var holden = new Person("Holden Caulfield", 16);
console.log("sally's species is " + sally.species + " and she is " + sally.age);
console.log("holden's species is " + holden.species + " and he is " + holden.age); 


function rectangle(heigth, width) {
	this.heigth = heigth;
	this.width = width;

	this.calcArea = function() {
		return heigth * width;
	} 
}


function Rabbit(adjective) {
	this.adjective = adjective;
	this.describeMyself = function() {
		console.log("I'm a " + this.adjective + " rabbit");
	};
}

function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
        return this.height * this.width);
  };
  // put our perimeter function here!
  this.calcPerimeter = function() {
      return this.height + this.height + this.width + this.width;
      }
  
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();


function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits
var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");

rabbit1.describeMyself();
rabbit2.describeMyself();
rabbit3.describeMyself();


function Person (name, age) {
	this.name = name;
	this.age = age;
}

var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);

family[3] = new Person("timmy", 6);


function Person(name, age) {
	this.name = name;
	this.age = age;
}

var ageDifference = function(person1, person2) {
	return person1.age - person2.age;
}

var olderAge = function(person1, person2) {
    if (person1.age > person2.age) {
        return person1.age;
        } else {
            return person2.age;
            }
    } 


var alice = new Person("Alice", 30);
var billy = new Person("Bily", 25);

console.log("The older person is " + olderAge(alice, billy));    


var spencer = {
  age: 22,
  country: "United States"
};

// make spencer2 here with constructor notation
var spencer2 = new Object();
spencer2.age = 22;
spencer2.country = "United States";


var snoopy = new Object();
snoopy.species = "beagle";
snoopy.age = 10;

var species = snoopy.species;

var agr = snoopy["age"];


var harry_potter = new Object();
harry_potter.pages  = 350;
harry_potter.author = "J.K. Rowling";

function Book (pages, author) {
	this.pages = pages;
	this.author = author;
}

var the_hobbit = new Book (320, "J.K.K. Tolkien");
 console.log(the_hobbit);


function Circle (radius) {
	this.radius = radius;
	this.area = function () {
		return Math.Pi * this.radius * this.radius;
	};
};


function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
        
    };
    // define a perimeter method here
    this.perimeter = function () {
        return 2 * Math.PI * this.radius; 
        }
    
}


// Our Person constructor
// function Person (name, age) {
//     this.name = name;
//     this.age = age;
//     }

// Now we can make an array of people
// var family = [];

// loop through our new array
// family["Alice"] = new Person("alice", 40);
// family["Bob"] = new Person("bob", 42);
// family["Michelle"] = new Person("michelle", 8);
// family["Timmy"] = new Person("timmy", 6);
// console.log(family);


// Our Person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
    }

// Now we can make an array of people
var family = [];

// loop through our new array
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);

//console.log(family);
for (var i = 0; i < family.length; i++) {
    console.log(family[i].name);
    }



// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

// get the difference in age between alice and billy using our function
var diff = ageDifference(alice, billy);



var bob = {
	firstName: "Bob",
	lastName: "Jones",
	phoneNumber: "(650) 777-777",
	email: "bob.jones@example.com"
	};

console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.email);


var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
}; 

//var contacts = [bob, mary];
var contacts = [];
contacts[0] = bob;
contacts[1] = mary;

console.log(contacts[1].phoneNumber);


var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

// printPerson added here
var printPerson = function (person) {
    console.log(person.firstName + " " + person.lastName );
    //console.log(contacts[0].firstName + " " + contacts[0].lastName );
    }

//printPerson(bob);
printPerson(contacts[0]);
printPerson(contacts[1]);



var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

var list = function () {
    var contactsLength = contacts.length;
    
    for (var i = 0; i < contactsLength; i++) {
        console.log(printPerson(contacts[i]));
        } 
    }
    
list();   
    
contacts[contacts.length] = {
	firstName: firstName,
	lastName: lastName,
	phoneNumber: phoneNumber,
	email: email
};



var james = {
    // add properties to this object!
    job: "programmer",
    married: false
};

function Person(job, married) {
    this.job = job;
    this.married = married;
}

// create a "gabby" object using the Person constructor!
var gabby = new Person("student", true);

// var gabby = new Person();
// gabby.job = "student";
// gabby.married = true;


function Person(job, married) {
    this.job = job;
    this.married = married;
    // add a "speak" method to Person!
    this.speak = function () {
        console.log("Hello!");
        }
    
}

var user = new Person("Codecademy Student",false);
user.speak();



var james = {
	job: "programmer",
	married: false,
	speak: function (word) {
		 console.log("Hello, I am feeling " + word); 
	}
};

james.speak("great");
james.speak("just okay");



var james = {
    job: "programmer",
    married: false,
    sayJob: function() {
        // complete this method
        console.log("Hi, I work as a " + this.job);
    }
};

// james' first job
james.sayJob();

// change james' job to "super programmer" here
james.job = "super programmer";
// james' second job
james.sayJob();



var james = {
    job: "programmer",
    married: false
};

// set to the first property name of "james"
var aProperty = "job";

// print the value of the first property of "james" 
// using the variable "aProperty"
console.log(james[aProperty]);



// complete these definitions so that they will have
// the appropriate types
var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";

console.log( typeof anObj ); // should print "object"
console.log( typeof aNumber ); // should print "number"
console.log( typeof aString ); // should print "string"



var nyObj = {
	name
}

console.log( myObj.hasOwnProperty('name') );
console.log(myObj.hasOwnProperty('nickname'));



var suitcase = {
    //shirt: "Hawaiian"
};

// console.log(suitcase.shorts);
if (suitcase.hasOwnProperty("shirt")) {
        console.log(suitcase.shirt);
    } else {
        suitcase.shirt = "jeans";
        }



var dog = {
	species: "bulldog",
	age: 3,
	color: "brown"
};

for (var property in dog) {
	console.log(property);
}

var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

for (var key in nyc) {
    console.log(key);
    }



var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

// write a for-in loop to print the value of nyc's properties
for (var key in nyc) {
    console.log(nyc[key]);
    }



function Person(name, age) {
	this.name = name;
	this.age = age;
};

var bob = new Person("Bob Smith". 30);


function Circle(radius) {
	this.radius = radius;
};

var circle = new Circle(20);

consolw.log(circle);



function Dog (breed) {
	this.breed = breed;
}

var buddy = new Dog ("Golden Retriever");
buddy.bark = function () {
	console.log("Woof");
}

buddy.bark();

var snoopy = new Dog ("Beagle");
snoopy.bark();



function Person (name, age) {
	this.name = name;
	this.age = age;
};

var printPersonName = function (p) {
	console.log(p.name); 
}

var bob = new Person ("Bob Smith", 30);
printPersonName(bob);


// make a person called me with your name and age
// then use printPersonName to print your name
var me = new Person("Andzej Wozny", 29);
printPersonName(me);



function Dog(breed) {
	this.breed = breed;
}

var buddy = new Dog ("Golden Retriever");
Dog.prototype.buddy.bark = function () {
	console.log("Woof");
}

buddy.bark();

var snoopy = new Dog ("Beagle");
snoopy.bark();



function Cat (name, breed) {
	this.name = name;
	this.breed = breed;
};

var cheshire = new Cat ("Cheshire Cat", "British Shorthair");
var gary = new Cat ("Gary", "Domestic Shorthair");

Cat.prototype.meow = function () {
	console.log("Moew!");
}

cheshire.meow();
gary.meow();



// create your Animal class here
function Animal (name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    }


// create the sayName method for Animal
Animal.prototype.sayName = function () {
    console.log("Hi my name is " + this.name);
    }




// provided code to test above constructor and method
var penguin = new Animal("Captain Cook", 2);
penguin.sayName();



function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};


// create a Penguin constructor here
function Penguin (name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    }
// create a sayName method for Penguins here
Penguin.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// our test code
var theCaptain = new Penguin("Captain Cook", 2);
theCaptain.sayName();



// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
    }
// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal();

var penguin = new Penguin("Jack");
penguin.sayName();



function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// create your Emperor class here and make it inherit from Penguin
function Emperor (name) {
    this.name = name;
    }
    Emperor.prototype = new Penguin();
// create an "emperor" object and print the number of legs it has
var emperor = new Emperor();
console.log(emperor.numLegs);



function Animal (name, numLegs) {
	this.name = name;
	this.numLegs = numLegs;
	this.isAlive = true;
}

function Penguin (name) {
	this.name = name;
	this.numLegs = 2;
}

function Emperor (name) {
	this.name = name;
    this.saying = "Waddle waddle";
}

Penguin.prototype = new Animal();
Emperor.prototype = new Penguin();

var myEmperor = new Emperor("Jules");

console.log( myEmperor.saying ); // should print "Waddle waddle"
console.log( myEmperor.numLegs ); // should print 2
console.log( myEmperor.isAlive ); // should print true


function Person (firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
}

var john = new Person ("John", "Smith", 30);
var myFirst = john.firstName;
var myLast = john.lastName;

var myAge = john.age;



function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
}

// create your Person 
var john = new Person("John", "Smith", 29);

// try to print his bankBalance
console.log(john);
console.log(john.bankBalance);



function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.getBalance = function() {
      // your code should return the bankBalance
      return bankBalance;
   };
}

var john = new Person('John','Smith',30);
console.log(john.bankBalance);

// create a new variable myBalance that calls getBalance()
var myBalance = john.getBalance();
console.log(myBalance);




function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   var returnBalance = function() {
      return bankBalance;
   };
       
   // create the new function here
   this.askTeller = function () {
       return returnBalance;
       }
}

var john = new Person('John','Smith',30);
console.log(john.returnBalance);
var myBalanceMethod = john.askTeller();
var myBalance = myBalanceMethod();
console.log(myBalance);



function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;

   this.askTeller = function (pass) {
   		if (pass == 1234) {
   			return bankBalance;
   		} else {
   			return "wrong password";
   		};
   }

}

var john = new Person ("John", "Smith", 30);

var myBalance = john.askTeller(1234);



var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages
for (var key in languages) {
    if (typeof languages[key] === "string") {
        console.log(languages[key]);
        }
    }
 



function Dog (breed) {
    this.breed = breed;
};

// add the sayHello method to the Dog class 
// so all dogs now can say hello
Dog.prototype.sayHello = function () {
    console.log("Hello this is a " + this.breed + " dog");
    };

var yourDog = new Dog("golden retriever");
yourDog.sayHello();

var myDog = new Dog("dachshund");
myDog.sayHello();



// what is this "Object.prototype" anyway...?
var prototypeType = typeof Object.prototype;
console.log(prototypeType);

// now let's examine it!
var hasOwn = Object.prototype.hasOwnProperty("hasOwnProperty");
console.log(hasOwn);



function StudentReport () {
	this.garde1 = 4;
	this.garde2 = 2;
	this.garde3 = 1;
	this.gerGPA = function () {
		return (this.garde1 + this.garde2 + this.garde3) / 3;
	};
};

var myStudentReport = new StudentReport();

for (var x in myStudentReport) {
	if (typeof myStudentReport[x] !== "function") {
		console.log("Muahaha! " + myStudentReport[x]);
	}
} 

console.log("Your overall GPA is " + myStudentReport.gerGPA());


function StudentReport() {
    var grade1 = 4;
    var grade2 = 2;
    var grade3 = 1;
    this.getGPA = function() {
        return (grade1 + grade2 + grade3) / 3;
    };
}

var myStudentReport = new StudentReport();

for(var x in myStudentReport) {
    if(typeof myStudentReport[x] !== "function") {
        console.log("Muahaha! " + myStudentReport[x]);
    }
}

console.log("Your overall GPA is " + myStudentReport.getGPA());



//Create the object called cashRegister 
//and initialize its total property
var cashRegister = {
    total: 0,
    add: function (itemCost) {
    	this.total += itemCost;
    }
};

//Using dot notation change the total property
cashRegister.total = 2.99;



var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    }
};


//call the add method for our items
cashRegister.add(0.98);
cashRegister.add(1.23);
cashRegister.add(4.99);
cashRegister.add(0.45);
//Show the total bill
console.log('Your bill is '+cashRegister.total);



var cashRegister = {
    total: 0,
//insert the add method here    
    add: function (itemCost) {
        this.total += itemCost;
        },
    
    scan: function (item) {
        switch (item) { 
        case "eggs": 
            this.add(0.98); 
            break;
        
        case "milk": 
            this.add(1.23); 
            break;
        
        //Add other 2 items here
        case "magazine":
            this.add(4.99);
            break;
        case "chocolate":
            this.add(0.45);
            break;
        };
        return true;
    }
};

//Scan 2 eggs and 3 magazines
cashRegister.scan("eggs");
//cashRegister.scan("eggs");

//Show the total bill
console.log('Your bill is '+cashRegister.total);



var cashRegister = {
    total:0,
    add: function(itemCost, quantity){
        this.total += itemCost * quantity;
    },
    scan: function(item, quantity) {
        switch (item) {
        case "eggs": this.add(0.98, quantity); break;
        case "milk": this.add(1.23, quantity); break;
        case "magazine": this.add(4.99, quantity); break;
        case "chocolate": this.add(0.45, quantity); break;
        }
    }
};

// scan each item 4 times
cashRegister.scan("eggs", 4);
cashRegister.scan("milk", 4);
cashRegister.scan("magazine", 4);
cashRegister.scan("chocolate", 4);

//Show the total bill
console.log('Your bill is '+cashRegister.total);



var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    //Dont forget to add your property
    add: function(itemCost) {
        this.lastTransactionAmount = itemCost;
        this.total += itemCost;
    },
    scan: function(item,quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    //Add the voidLastTransaction Method here
    voidLastTransaction: function () {
           this.total -= this.lastTransactionAmount;
        }
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',1);
cashRegister.scan('chocolate',4);

//Void the last transaction and then add 3 instead
cashRegister.voidLastTransaction();
cashRegister.scan('chocolate',3);
//Show the total bill
console.log('Your bill is '+cashRegister.total);



// create a constructor for the StaffMember class
function StaffMember (name, discountPercent) {
    this.name = name;
    this.discountPercent = discountPercent;
    }

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

//Create a StaffMember for yourself called me
var me = new StaffMember("Andrzej", 20);



function StaffMember(name, discountPercent) {
	this.name = name;
	this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally", 5);
var bob = new StaffMember("bob", 10);

var cashRegister = {
	total: 0,
	lastTransactionAmount: 0,
	
	add: function (itemCost) {
		this.total += (itemCost || 0);
		this.lastTransactionAmount = itemCost;
	},

	scan: function(item, quantity) {
		switch (item) {
			case "eggs":
				this.add(0.98 * quantity);
				break;
			case "milk":
				this.add(1.23 * quantity);	
				break;
			case "magazine":
				this.add(4.99 * quantity);
				break;
			case "chocolate":
				this.add(0.45 * quantity);
				break;			
		}
		return true;
	},

	voidLastTransaction : function () {
		this.total -= this.lastTransactionAmount;
 		this.lastTransactionAmount = 0;
	},


};

cashRegister.scan('eggs', 1);
cashRegister.scan('milk', 1);
cashRegister.scan('magazine', 3);

console.log("You bill is " + cashRegister.total.toFixed(2));



function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

// Create yourself again as 'me' with a staff discount of 20%
var me = new StaffMember("Andrzej", 20); 

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Create a new method applyStaffDiscount here
    applyStaffDiscount: function (employee) {
        //total *= discountPercent;
        this.total -= this.total * (employee.discountPercent / 100);
        }
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object 
// to applyStaffDiscount
cashRegister.applyStaffDiscount("me");

// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));