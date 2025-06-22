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

document.querySelector('.isPaid').addEventListener('click', () => {
    isPaid = true
    document.querySelector('.isPaid').classList.add('tagActive')
    document.querySelector('.isNotPaid').classList.remove('tagActive')
});
document.querySelector('.isNotPaid').addEventListener('click', () => {
    isPaid = false
    document.querySelector('.isPaid').classList.remove('tagActive')
    document.querySelector('.isNotPaid').classList.add('tagActive')
});

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
        document.querySelector('.blueTagButton').classList.add('tagActive')
    } else {
        blueTag = false
        document.querySelector('.blueTagButton').classList.remove('tagActive')
    }
    console.log(blueTag)
});
document.querySelector('.redTagButton').addEventListener('click', () => { 
    if (!redTag) {
        redTag = true;
        document.querySelector('.redTagButton').classList.add('tagActive')
    } else {
        redTag = false
        document.querySelector('.redTagButton').classList.remove('tagActive')
    }
});
document.querySelector('.wheatTagButton').addEventListener('click', () => { 
    if (!wheatTag) {
        wheatTag = true;
        document.querySelector('.wheatTagButton').classList.add('tagActive')
    } else {
        wheatTag = false
        document.querySelector('.wheatTagButton').classList.remove('tagActive')
    }
});
document.querySelector('.orangeTagButton').addEventListener('click', () => { 
    if (!orangeTag) {
        orangeTag = true;
        document.querySelector('.orangeTagButton').classList.add('tagActive')
    } else {
        orangeTag = false
        document.querySelector('.orangeTagButton').classList.remove('tagActive')
    }
});
document.querySelector('.greenTagButton').addEventListener('click', () => { 
    if (!greenTag) {
        greenTag = true;
        document.querySelector('.greenTagButton').classList.add('tagActive')
    } else {
        greenTag = false
        document.querySelector('.greenTagButton').classList.remove('tagActive')
    }
});
document.querySelector('.yellowTagButton').addEventListener('click', () => { 
    if (!yellowTag) {
        yellowTag = true;
        document.querySelector('.yellowTagButton').classList.add('tagActive')
    } else {
        yellowTag = false
        document.querySelector('.yellowTagButton').classList.remove('tagActive')
    }
});

function apply () {
table = tableInput.value
if ( table - 2 === NaN || table >= 100) {
    table = '';
    alert ('Invalid Table Number')
}

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


document.querySelector('.blueTagButton').classList.remove('tagActive')
document.querySelector('.redTagButton').classList.remove('tagActive')
document.querySelector('.wheatTagButton').classList.remove('tagActive')
document.querySelector('.orangeTagButton').classList.remove('tagActive')
document.querySelector('.greenTagButton').classList.remove('tagActive')
document.querySelector('.yellowTagButton').classList.remove('tagActive')

document.querySelector('.isPaid').classList.remove('tagActive')
document.querySelector('.isNotPaid').classList.add('tagActive')
}