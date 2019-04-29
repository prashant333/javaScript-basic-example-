// let arr = ['john', 'smith', 'sam']

// for(let name of arr){
//     console.log(`A message for ${name}`)
// }
// let str = 'hello how are you'
// let name = str.split(' ');
// // console.log(name)
// let x = name.map((item, index)=> index ==0 ? item:item[0].toUpperCase()+item.slice(1))
// console.log(x.join(''))

let arr = [ 1, 2, 15 ];

arr.sort(function(a, b) { return a - b; });

console.log(arr)