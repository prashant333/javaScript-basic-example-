
// function summation(a,b) {
//     c= a+b;
//     return c
// }

// console.log("the sum of number is",summation(4,4))
// console.log(c)
// let x = 10;
// if (true) {
// let y = 20;
// var z = 30;
// console.log(x + y + z);
// // → 60
// }
// // y is not visible here
// console.log(x + z);
// // → 40
// console.log("The future says:", future());
// function future() {
// return "You'll never have flying cars";
// }
// add(4,4)
// function add(a,b){
//     console.log("the sum is",a+b)
// }
function wrapValue(n) {
    let local = n;
    return () => local;
    }
    let wrap1 = wrapValue(1);
    let wrap2 = wrapValue(2);
    console.log(wrap1());
