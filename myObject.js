// let myObject = {
//     age: 30,
// };
// function isEmpty(object) {
//     if (Object.keys(object).length == 1) {
//         return false;
//     }
//     return true
// }
// console.log(isEmpty(myObject))
// // console.log(Object.keys(myObject))

// let salary = {
//     ramesh : 400,
//     sukesh : 400,
//     malesh : 200,
//     admin : "suresh",
//     hi(){console.log(this.admin)}
// } 
// function sumSalary(obj) {
//     let sum = 0;
//     for (let key in obj) {
//         if(!isNaN(obj[key])){
//             sum += 2* (obj[key]);
//         }
//     }return sum
// }
// console.log(sumSalary(salary))

let user = {
    name: "John",
    hi() { console.log(this.name); },
    bye() { console.log("Bye"); }
  };
  
  (user.hi)(); // John (the simple call works)
  
  // now let's call user.hi or user.bye depending on the name
  (user.name == "John" ? user.hi : user.bye)(); // Error!  change to : (user.name == "John" ? user.hi() : user.bye())

