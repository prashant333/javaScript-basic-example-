// filte range
// let numberArray=[2,5,6,1,3,4];

// function filterRange(arr, a,b){
//     let newArray= [];
//     // check for elements in range of a and b.
//     arr.forEach(element => (element>=a && element<=b)? newArray.push(element): null);
//     // output in console.
//     console.log(newArray)
//     console.log(numberArray)
// }
// filterRange(numberArray,2,4)

// filter range in place
let numberArray1 = [5, 3, 8, 1]

function filterRangeInPlace(arr, a ,b) {
    // let newFiltererdArray = [];

    let y=arr.map((element,index) => (element>=a && element<=b) ? arr.splice(index,1):element);
    console.log(y)
}
filterRangeInPlace(numberArray1,1,4)