var friends = {
    bill: {
        firstName: 'Bill',
        lastName: 'Malcowicz',
        number: "(0412) 23-43-56",
        address: [] 
        },
    steve: {
        firstName: 'Steve',
        lastName: 'Malcowicz',
        number: "(0412) 123-3456",
        address: []
        },
    john: {},
    mike: {}
    };

//console.log(friends);    
friends.john = {
    firstName: 'John',
    lastName: 'Malcowicz',
    number: "(0412) 23-657-56",
    address: []
    };

friends.mike = {
    firstName: 'Mike',
    lastName: 'Malcowicz',
    number: "(0412) 344-5656",
    address: []
    };
 
var list = function (friends) {
    for (var friend in friends) {
        console.log(friend);
    }
} 
    

var search = function (name) {
    for (var friend in friends) {
        if (friends[friend].firstName === name) {
             console.log(friends[friend]);
             return friends[friend];
        }
    }
}

list(friends);
search('Steve');

//console.log(friends);     
        