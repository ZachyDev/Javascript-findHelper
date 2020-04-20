// define an array with associated objects
let users = [
    { name: 'Zachy'},
    { name: 'Doroh'},
    { name: 'Moseti'},
    { name: 'Zachy'},
];

// define a find helper to return a record that satisfies the given condition
let findUser  = users.find(function(user){
    return user.name === 'Zachy';
});
// output the result of the find
console.log(findUser);