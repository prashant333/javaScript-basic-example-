// let rabbit={}
// rabbit.speak = function(line){
//     console.log(`The rabbit says ${line}`)
// };

// rabbit.speak('hello')

function speak(line) {
    console.log(`The ${this.type} rabbit says ${line}`)
}

let whiteRabbit = {type:"white", speak}
let blackRabbit = {type:"black", speak}

whiteRabbit.speak('oh my god', +'are you alive')
blackRabbit.speak('I am dead')