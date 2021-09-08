import Data from "./backend.js";

// THE USER ARRAY 
// let users = [];

// FOR LOOP

// for (let i = 0; i < username.length; i++) {
//     let user = {
//         "name": username[i],
//         "email": email[i],
//         "gender": gender[i],
//     };
//     users.push(user);
// }

//WHILE LOOP

// let i = 0;

// while (i < username.length) {
//     let user = {
//         "name": username[i],
//         "email": email[i],
//         "gender": gender[i],
//     };
//     users.push(user);
//     i++;
// }
// console.log(users);

// USING HIGHER ORDER FUNCTION (MAP) 

let users = username.map((item, index) => {
    let user = {}
    user.name = username[index];
    user.email = email[index];
    user.gender = gender[index];

    return user;
});

console.log(users);