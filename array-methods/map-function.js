// let x=['hello','how','are','you']

// let result = x.map(function(,index){
//     console.log(`item is ${item} and index is ${index}`)
// })

let str = "Hello";

// does the same as
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value); // outputs characters one by one
}