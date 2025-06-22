let newID = '';
let isPaid;
let table;
let blue  = false;
let red  = false;
let wheat  = false;
let orange  = false;
let green  = false;
let yellow  = false;

Make.test();
Make.Load();
Make.Start();


document.querySelector('.isPaid').addEventListener('click', () =>{
    isPaid = true;
    console.log(isPaid)
})
document.querySelector('.isNotPaid').addEventListener('click', () =>{
    isPaid = false;
})
document.querySelector('.apply').addEventListener('click', () => {
    Make.NewTimer();
    
blue  = false;
red  = false;
wheat  = false;
orange  = false;
green  = false;
yellow  = false;
})
document.querySelector('.blueTagButton').addEventListener('click', () =>{
    if (blue == true){
    blue = false;
    } else if (blue == false || blue == undefined)
    blue = true;
})
document.querySelector('.redTagButton').addEventListener('click', () =>{
    if (red == true){
    red = false;
    } else if (red == false || red == undefined)
    red = true;
})
document.querySelector('.wheatTagButton').addEventListener('click', () =>{
    if (wheat == true){
    wheat = false;
    } else if (blue == false || wheat == undefined)
    wheat = true;
})
document.querySelector('.orangeTagButton').addEventListener('click', () =>{
    if (orange == true){
    orange = none;
    } else if (orange == false || orange == undefined)
    orange = true;
})
document.querySelector('.greenTagButton').addEventListener('click', () =>{
    if (green == true){
    green = none;
    } else if (green == false || green == undefined)
    green = true;
})
document.querySelector('.yellowTagButton').addEventListener('click', () =>{
    if (yellow == true){
    yellow = none;
    } else if (yellow == false || yellow == undefined)
    yellow = true;
})

 