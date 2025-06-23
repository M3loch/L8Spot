const html = {
    addNewTimerBTN: `
        <div class="add-new-timer" onclick="showModal()">
            <div class="plus">
                +
            </div>
            <div class="add-new-timer-text">
                Добавить новый таймер
            </div>
        </div>`,

    hollowStarImg: '<img class="starMini" src="icons/stars/hollowStar.svg" >',
    fullStarImg: '<img class="starMini" src="icons/stars/fullStar.svg" >',
    goldStar: '<img class="starMini" src="icons/stars/goldStar.svg" >',

    strenght: [
        '<img class="starMini" src="icons/stars/hollowStar.svg" >', 
        '<img class="starMini" src="icons/stars/fullStar.svg" >', 
        '<img class="starMini" src="icons/stars/fullStar.svg" ><img class="starMini" src="icons/stars/fullStar.svg" >',
        '<img class="starMini" src="icons/stars/fullStar.svg" ><img class="starMini" src="icons/stars/fullStar.svg" ><img class="starMini" src="icons/stars/fullStar.svg" >',
        '<img class="starMini" src="icons/stars/fullStar.svg" ><img class="starMini" src="icons/stars/fullStar.svg" ><img class="starMini" src="icons/stars/fullStar.svg" ><img class="starMini" src="icons/stars/fullStar.svg" >',
        '<img class="starMini" src="icons/stars/goldStar.svg" >'
    ],

    tagsHtml: [
        `<div class="blueTag">Холод</div>`, 
        '<div class="redTag">Ягоды</div>', 
        '<div class="wheatTag">Кондитерка</div>', 
        '<div class="orangeTag">Фрукты</div>', 
        '<div class="greenTag">Кислость</div>', 
        '<div class="yellowTag">Пряность</div>'
    ],
};