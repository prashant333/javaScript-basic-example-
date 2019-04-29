// console.log("The future says:", future());
// function future() {
// return "You'll never have flying cars";
// }
// alert("linked")
// string function
// console.log("one two three".indexOf("ree"));
// subs(4,3)
// function add(a,b){
//     c=a+b 
//     console.log("the value is:",c)

// }
// function subs(a,b){
//     console.log("the value is :",a-b)
// }

var message = ""
function Particle(){
    this.x=100
    this.y=100
    // this.show= function(){
    //     point(this.x, this.y);
    // }
}
Particle.prototype.show = function(){
    point(this.x, this.y);
}
var p;
var p = new Particle()
console.log(p)

console.log(Object.getPrototypeOf({}));
