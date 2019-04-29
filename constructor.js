// let user = new function() {
//     this.name = "John";
//     this.isAdmin = false;
  
//     // ...other code for user creation
//     // maybe complex logic and statements
//     // local variables etc
//   };
//   user.money=1000;
//   console.log(user)

//  two different constructor function returning the same object
// let obj ={}

// function A(){
//     return obj;
// }
// function B(){
//     return obj;
// }
// console.log(new A() === new B())

function Calc(a,b) {
    this.a = a;
    this.b = b;
    function sum(){
        return this.a + this.b;
    }
    console.log("sum =", Calc.sum())
}

let add = new Calc(2,3)
console.log(add)