class Timer  {
    constructor(id, stage, timeLeft, table, isPaid, /*strenght*/ blue, red, wheat, orange, green, yellow) {
        this.id = id;
        this.table = table;
        this.isPaid = isPaid;
        this.stage = stage;
        this.timeLeft = timeLeft;


        let blueTag, redTag, wheatTag, orangeTag, greenTag, yellowTag;
        
        if (blue == false) {
            blueTag = ''
        } else {
            blueTag = '<div class="blueTag">Холод</div>'
        }
        if (red == false) {
            redTag = ''
        } else {
            redTag = '<div class="redTag">Ягоды</div>'
        }
        if (wheat == false) {
            wheatTag = ''
        } else {
            wheatTag = '<div class="wheatTag">Кондитерка</div>'
        }
        if (orange == false) {
            orangeTag = ''
        } else {
            orangeTag = '<div class="orangeTag">Фрукты</div>'
        }
        if (green == false) {
            greenTag = ''
        } else {
            greenTag = '<div class="greenTag">Кислость</div>'
        }
        if (yellow == false) {
            yellowTag = ''
        } else {
            yellowTag = '<div class="yellowTag">Пряность</div>'
        }

        // this.strenght = strenght;
        this.html =
            `                <div class="timer-object" id="${this.id}">
                    <div>
                        <img class="cross" src="icons/modalCross.svg" alt="">
                    </div>
                <div class="stage-name">
${stage}
                </div>
                <div class="countdown">
                    <div class="time">${this.timeLeft}</div>
                </div>
                <div class="info-block">
                    <div class="table-number">
                    #${this.table}
                    </div>
                    <div class="is-paid-${this.isPaid}">
                        $
                    </div>
                </div>
                <div class="tag-block">
                    ${blueTag}
                    ${redTag}
                    ${wheatTag}
                    ${orangeTag}
                    ${greenTag}
                    ${yellowTag}
                </div>
                <div class='time-outs'>
                    <div class="time-out">
                        <img class="time-out-icon" src="icons/time.svg" alt="">
                        <span class="time-out-value">-0:00</span>
                    </div>
                    <div class="time-out">
                        <img class="time-out-icon" src="icons/time.svg" alt="">
                        <span class="time-out-value">-0:00</span>
                    </div>
                </div>
            </div>`
    }
    makeHTML() {
        document.querySelector('.add-new-timer').remove();
        let HTML = document.querySelector('.timerGrid').innerHTML || '';
        document.querySelector('.timerGrid').innerHTML = HTML + this.html + html.addNewTimerButton
    }
}