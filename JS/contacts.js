// var bob = {
// 	firstName: "Bob",
// 	lastName: "Jones",
// 	phoneNumber: "(650) 777-777",
// 	email: "bob.jones@example.com"
// 	};

// console.log(bob.firstName);
// console.log(bob.lastName);
// console.log(bob.email);



// var bob = {
//     firstName: "Bob",
//     lastName: "Jones",
//     phoneNumber: "(650) 777-7777",
//     email: "bob.jones@example.com"
// };

// var mary = {
//     firstName: "Mary",
//     lastName: "Johnson",
//     phoneNumber: "(650) 888-8888",
//     email: "mary.johnson@example.com"
// }; 

// //var contacts = [bob, mary];
// var contacts = [];
// contacts[0] = bob;
// contacts[1] = mary;

// console.log(contacts[1].phoneNumber);



// var bob = {
//     firstName: "Bob",
//     lastName: "Jones",
//     phoneNumber: "(650) 777-7777",
//     email: "bob.jones@example.com"
// };

// var mary = {
//     firstName: "Mary",
//     lastName: "Johnson",
//     phoneNumber: "(650) 888-8888",
//     email: "mary.johnson@example.com"
// };

// var contacts = [bob, mary];

// // printPerson added here
// var printPerson = function (person) {
//     console.log(person.firstName + " " + person.lastName );
//     //console.log(contacts[0].firstName + " " + contacts[0].lastName );
//     };

// //printPerson(bob);
// printPerson(contacts[0]);
// printPerson(contacts[1]);



// var bob = {
//     firstName: "Bob",
//     lastName: "Jones",
//     phoneNumber: "(650) 777-7777",
//     email: "bob.jones@example.com"
// };

// var mary = {
//     firstName: "Mary",
//     lastName: "Johnson",
//     phoneNumber: "(650) 888-8888",
//     email: "mary.johnson@example.com"
// };

// var contacts = [bob, mary];

// function printPerson(person) {
//     console.log(person.firstName + " " + person.lastName);
// };

// var list = function () {
//     var contactsLength = contacts.length;
    
//     for (var i = 0; i < contactsLength; i++) {
//         console.log(printPerson(contacts[i]));
//         } 
//     }
// };

// list();   
    


// var bob = {
//     firstName: "Bob",
//     lastName: "Jones",
//     phoneNumber: "(650) 777-7777",
//     email: "bob.jones@example.com"
// };

// var mary = {
//     firstName: "Mary",
//     lastName: "Johnson",
//     phoneNumber: "(650) 888-8888",
//     email: "mary.johnson@example.com"
// };

// var contacts = [bob, mary];

// function printPerson(person) {
//     console.log(person.firstName + " " + person.lastName);
//     };

// function list() {
//     var contactsLength = contacts.length;
//     for (var i = 0; i < contactsLength; i++) {
//         printPerson(contacts[i]);
//     }
// };

// /*Create a search function
// then call it passing "Jones"*/
// function search (lastName) {
//     var contactsLength = contacts.length;
//     for (var i = 0; i < contactsLength; i++) {
//         //printPerson(contacts[i]);
//         if (contacts[i].lastName === lastName) {
//             console.log(printPerson(contacts[i]));
//             }
//     }
// };

// search("Jones");
// search("Johnson");



// var bob = {
//     firstName: "Bob",
//     lastName: "Jones",
//     phoneNumber: "(650) 777-7777",
//     email: "bob.jones@example.com"
// };

// var mary = {
//     firstName: "Mary",
//     lastName: "Johnson",
//     phoneNumber: "(650) 888-8888",
//     email: "mary.johnson@example.com"
// };

// var contacts = [bob, mary];

// function printPerson(person) {
//     console.log(person.firstName + " " + person.lastName);
//     };

// function list() {
//     var contactsLength = contacts.length;
//     for (var i = 0; i < contactsLength; i++) {
//         printPerson(contacts[i]);
//     }
// };

// /*Create a search function
// then call it passing "Jones"*/
// function search (lastName) {
//     var contactsLength = contacts.length;
//     for (var i = 0; i < contactsLength; i++) {
//         //printPerson(contacts[i]);
//         if (contacts[i].lastName === lastName) {
//             console.log(printPerson(contacts[i]));
//             }
//         }
//     };

// function add (firstName, lastName, phoneNumber, email) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.phoneNumber = phoneNumber;
//     this.email = email;
// };
// //search("Jones");
// //search("Johnson");
// contacts[contacts.length] = add("John", "Malcowicz", "(345) 555-5555", "mal@example.com");

// console.log(contacts);


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
    };

function list() {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        printPerson(contacts[i]);
    }
};

/*Create a search function
then call it passing "Jones"*/
function search (lastName) {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        //printPerson(contacts[i]);
        if (contacts[i].lastName === lastName) {
            console.log(printPerson(contacts[i]));
            }
        }
    };

function add (firstName, lastName, phoneNumber, email) {
    //var obj = new Object();
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    //console.log(obj);
};

//search("Jones");
//search("Johnson");

contacts[contacts.length] =  new add("John", "Malcowicz", "(345) 555-5555", "mal@example.com");

list(contacts);

//console.log(contacts);

