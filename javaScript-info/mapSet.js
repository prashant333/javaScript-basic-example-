// 1.
// function uniqueElelment(arr,arr1) {
//     let uniqueSet = new Set()
//     uniqueSet.add(arr)
//     uniqueSet.add(arr)
//     console.log(uniqueSet)
// }
// function unique(arr) {
//     return Array.from(new Set(arr));
//   }
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// console.log(unique(values))

// 2.
// function aclean(arr) {
//     let map = new Map();
  
//     for (let word of arr) {
//       // split the word by letters, sort them and join back
//       let sorted = word.toLowerCase().split('').sort().join(''); // (*)
//       map.set(sorted, word);
//       console.log(map.size)
//     }

//     return Array.from(map.values());
//   }
  
//   let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
//   console.log( aclean(arr) );

// 3.

// let map = new Map();

// map.set("name", "John");
// let keys=[map.keys()];
// keys.push("more");
// console.log(keys)

// 4.
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessage = new WeakSet()

readMessage.add(messages[0])
readMessage.add(messages[1])
console.log(Array.from(readMessage))
