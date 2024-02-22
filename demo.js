// let backpack = [`Flashlight`, `Sleeping Bag`, `Tent`]
//     backpack.push(`marshmallows`, `graham crackers`)

// let nightSetup = backpack.slice(1,4)

// for ( let i = 0; i < nightSetup.length; i++){
//     if (backpack.includes(nightSetup[i])) {
//         console.log(`You packed ${nightSetup[i]}`) 
//     } else {
//         console.log(`You need to pack ${nightSetup[i]}`)
//     }
//     }

    
// for(let i = 0;  )



let guessMe = 54

while (guessMe < 100) {
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        guessMe += 25
    } else if (guessMe % 3 === 0) {
        guessMe -= 27
    } else {
        guessMe += 3
    }
    guessMe += 22
}
 
console.log(guessMe)








