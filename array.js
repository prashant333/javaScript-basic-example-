// nested array
// myArray =[[1,2,3],[11,21,31],[41,51,61]]
// console.log(myArray[0][1])

// console.log(Math.round(7.47))

// let myNum=[1,2,3,4,5]
// let reverseArray =[]
// console.log(reverseArray= myNum.reverse())

// let myNum=[1,2,3,4,5]
// console.log(myNum.length)

// console.log(Math.floor(987665/2))

// let arr=[1,2]
// let ary = []
// ary.push(arr.pop())
// console.log(ary)

// function repeat(n, action) {
//     for (let i = 0; i < n; i++) {
//     action(i);
//     }
//     }
// let labels = [];
// repeat(5, b => {
// labels.push(`Unit ${b + 1}`);
// });
// console.log(labels);

// var array = [3 , 6, 2, 56, 32, 5, 89, 32];
// var largest= 0;

// for (i=0; i<=largest;i++){
//     if (array[i]>largest) {
//         var largest=array[i];
//     }
// }
// console.log(largest)

// var array = [3 , 6, 2, 56, 32, 5, 89, 32],
//     largest = array.sort((a,b)=>a-b).reverse()[1]; // largest = array.sort((a,b)=>a-b)[array.length - 1];
//     console.log(largest)

let nums = [1,2,3,5]
getSecondLargest(nums)
function getSecondLargest(nums) {
    console.log(nums.sort((a, b) => a - b).reverse()[1]) 
    
}
