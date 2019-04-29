// // read from the global registry
// let id = Symbol.for("id"); // if the symbol did not exist, it is created
// let id1 = Symbol.for("id")
// // read it again
// let idAgain = Symbol.for("id");

// // the same symbol
// console.log( id === idAgain ); // true

let user ={name:"jhon"}
let id = Symbol('id')
user[id] = '123'
let idAgain= id;
// console.log(idAgain==id)
user[idAgain]='121'
console.log(user)
// let id1 = Symbol('id1')
// user[id1] = '134'
// console.log(user)
