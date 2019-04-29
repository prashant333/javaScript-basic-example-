// 1.
// let salary = {
//     "john":100,
//     "smith":500,
//     "Ram": 600,
// }
// function total(object) {
//     let total =0;
//     for (const iterator of Object.values(object)) {
//         total+= iterator
//     }
//     return total;
// }
// console.log(total(salary))
// // OR
// function sumSalaries(salaries) {
//     return Object.values(salaries).reduce((a, b) => a + b, 0) 
//   }

//2.
let salary = {
    "john":100,
    "smith":500,
    "Ram": 600,
}
function count(params) {
    return Object.entries(params).length;
}
console.log(count(salary))