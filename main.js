const time = 12;
 let currentTime = time % 12;
 let morning = "AM"

 if (currentTime === 0) {
    currentTime = 12;
}

if (time > 11 && time < 24) {
    console.log(currentTime + "PM")
;} else {
    console.log(currentTime + "AM")
}


let score = 89;

if (score > 89) {
    console.log("You got an A!")
} else if (score > 79 && score < 90){
    console.log("You got an B!")
} else if ( score > 69 && score < 80) {
    console.log("You got an C!")
} else if (score > 59 && score < 70) {
    console.log("You got an D!")
} else {
    console.log("You failed")
}




