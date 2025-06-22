function highlighStar(param) {
    switch(param) {
        case 0:
            document.querySelector('.hollowStar').classList.add('strengthPicked')
            document.querySelector('.fullStar1').classList.remove('strengthPicked')
            document.querySelector('.fullStar2').classList.remove('strengthPicked')
            document.querySelector('.fullStar3').classList.remove('strengthPicked')
            document.querySelector('.fullStar4').classList.remove('strengthPicked')
            document.querySelector('.goldStar').classList.remove('strengthPicked')
        break;
        case 1 : 
            document.querySelector('.hollowStar').classList.remove('strengthPicked')
            document.querySelector('.fullStar1').classList.add('strengthPicked')
            document.querySelector('.fullStar2').classList.remove('strengthPicked')
            document.querySelector('.fullStar3').classList.remove('strengthPicked')
            document.querySelector('.fullStar4').classList.remove('strengthPicked')
            document.querySelector('.goldStar').classList.remove('strengthPicked')
        break;
        case 2 : 
            document.querySelector('.hollowStar').classList.remove('strengthPicked')
            document.querySelector('.fullStar1').classList.add('strengthPicked')
            document.querySelector('.fullStar2').classList.add('strengthPicked')
            document.querySelector('.fullStar3').classList.remove('strengthPicked')
            document.querySelector('.fullStar4').classList.remove('strengthPicked')
            document.querySelector('.goldStar').classList.remove('strengthPicked')
        break;
        case 3 : 
            document.querySelector('.hollowStar').classList.remove('strengthPicked')
            document.querySelector('.fullStar1').classList.add('strengthPicked')
            document.querySelector('.fullStar2').classList.add('strengthPicked')
            document.querySelector('.fullStar3').classList.add('strengthPicked')
            document.querySelector('.fullStar4').classList.remove('strengthPicked')
            document.querySelector('.goldStar').classList.remove('strengthPicked')
        break;
        case 4 : 
            document.querySelector('.hollowStar').classList.remove('strengthPicked')
            document.querySelector('.fullStar1').classList.add('strengthPicked')
            document.querySelector('.fullStar2').classList.add('strengthPicked')
            document.querySelector('.fullStar3').classList.add('strengthPicked')
            document.querySelector('.fullStar4').classList.add('strengthPicked')
            document.querySelector('.goldStar').classList.remove('strengthPicked')
        break;
        case 5 : 
            document.querySelector('.hollowStar').classList.remove('strengthPicked')
            document.querySelector('.fullStar1').classList.remove('strengthPicked')
            document.querySelector('.fullStar2').classList.remove('strengthPicked')
            document.querySelector('.fullStar3').classList.remove('strengthPicked')
            document.querySelector('.fullStar4').classList.remove('strengthPicked')
            document.querySelector('.goldStar').classList.add('strengthPicked')
        break;
        default: 
            document.querySelector('.hollowStar').classList.remove('strengthPicked')
            document.querySelector('.fullStar1').classList.remove('strengthPicked')
            document.querySelector('.fullStar2').classList.remove('strengthPicked')
            document.querySelector('.fullStar3').classList.remove('strengthPicked')
            document.querySelector('.fullStar4').classList.remove('strengthPicked')
            document.querySelector('.goldStar').classList.remove('strengthPicked')
    }


}

function showModal () {
    let modal = document.querySelector(".modalBG");
    modal.style.display = "block";
}

function closeModal () {
    let modal = document.querySelector(".modalBG");
    modal.style.display = "none";
    blueTag = false;
    redTag = false;
    wheatTag = false;
    orangeTag = false;
    greenTag = false;
    yellowTag = false;
    strength = '';
    isPaid = false;
    document.querySelector('.hollowStar').classList.remove('strengthPicked')
    document.querySelector('.fullStar1').classList.remove('strengthPicked')
    document.querySelector('.fullStar2').classList.remove('strengthPicked')
    document.querySelector('.fullStar3').classList.remove('strengthPicked')
    document.querySelector('.fullStar4').classList.remove('strengthPicked')
    document.querySelector('.goldStar').classList.remove('strengthPicked')
}
let strength = '';

let isPaid = false;

let table = undefined;

let blueTag = false;
let redTag = false;
let wheatTag = false;
let orangeTag = false;
let greenTag = false;
let yellowTag = false;

document.querySelector('.isPaid').addEventListener('click', () => isPaid = true);
document.querySelector('.isNotPaid').addEventListener('click', () => isPaid = false);

const tableInput = document.querySelector('.tableInput');

document.querySelector('.hollowStar').addEventListener('click', () => {;
    strength = 0
    highlighStar(strength)
});

document.querySelector('.fullStar1').addEventListener('click', () => {
    strength = 1
    highlighStar(strength)
});
document.querySelector('.fullStar2').addEventListener('click', () => {
    strength = 2
    highlighStar(strength)
});
document.querySelector('.fullStar3').addEventListener('click', () => {
    strength = 3
    highlighStar(strength)
});
document.querySelector('.fullStar4').addEventListener('click', () => {
    strength = 4
    highlighStar(strength)
});

document.querySelector('.goldStar').addEventListener('click', () => {
    strength = 5
    highlighStar(strength)
});

document.querySelector('.blueTagButton').addEventListener('click', () => { 
    if (!blueTag) {
        blueTag = true;
    } else {
        blueTag = false
    }
    console.log(blueTag)
});
document.querySelector('.redTagButton').addEventListener('click', () => { 
    if (!redTag) {
        redTag = true;
    } else {
        redTag = false
    }
});
document.querySelector('.wheatTagButton').addEventListener('click', () => { 
    if (!wheatTag) {
        wheatTag = true;
    } else {
        wheatTag = false
    }
});
document.querySelector('.orangeTagButton').addEventListener('click', () => { 
    if (!orangeTag) {
        orangeTag = true;
    } else {
        orangeTag = false
    }
});
document.querySelector('.greenTagButton').addEventListener('click', () => { 
    if (!greenTag) {
        greenTag = true;
    } else {
        greenTag = false
    }
});
document.querySelector('.yellowTagButton').addEventListener('click', () => { 
    if (!yellowTag) {
        yellowTag = true;
    } else {
        yellowTag = false
    }
});

function apply () {
table = tableInput.value
const tags = [blueTag, redTag, wheatTag, orangeTag, greenTag, yellowTag]
console.log(tags)

addNewTimer(table, isPaid, strength, tags)

strength = '';

isPaid = false;

table = undefined;

blueTag = false;
redTag = false;
wheatTag = false;
orangeTag = false;
greenTag = false;
yellowTag = false;
tableInput.value = ''
}