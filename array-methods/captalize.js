let str="my-short-start"
let x=str.split('-');
// console.log(x)
let z=x.map(function(item,index){
        if(index>0){
            item[0]=item[0].toUpperCase()+item.slice(1); 
            // console.log(y) 
        }
})
console.log(z)