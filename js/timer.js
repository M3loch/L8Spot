let timers = []

class Timer {

constructor (id, table, isPaid, strengthString, tags, timeLeft = 0, stage = 1, timeID = 0, delays = ''){
    this.id = id;
    this.table = table;
    this.isPaid = isPaid;
    this.strenght = strengthString;
    this.stageTimes = ['Начать', 180, 300, 900, 600, 1200, 600, 1200, 1200]
    this.stageNames = ["Старт", "Прогрев", "Качество", "Первая замена", "Нагрев углей", "Вторая замена", "Нагрев углей", "Перезабив", "Жизнь кальяна"]
    
    this.delays = delays;

    if (!timeLeft){
        this.timeLeft = this.stageTimes[timeLeft];
    } else {
        this.timeLeft = timeLeft 
    }

    this.stage = stage
    
    this.stageName = this.stageNames[this.stage - 1];

    this.timeID = timeID;

    this.tags = '';
    for (let i = 0; i < tags.length; i++) {
        this.tags += tags[i]
    }
    
    this.html =
`<div class="timer-object" id="${this.id}">
    <div>
        <span class="deleteTimer" onclick="deleteTimer(${this.id})">&#215;</span>
    </div>
    <div class="stage-name" id="stageNameOf${this.id}">
        ${this.stageName}
    </div>
    <div class="countdown"  onclick="timers[${this.id}].changeStage()">
        <div class="time" id="countdown${this.id}" >${this.timeLeft}</div>
    </div>
    <div class="info-block">
        <div class="table-number">
            #${this.table}
        </div>
        <div  onclick="changePaymentStatus(${this.id})" id="is-paid-${this.id}" class="is-paid-${this.isPaid}">
            $
        </div>
    </div>
    <div class="strength-block>
    ${this.strenght}
    </div>
    <div class="tag-block">
        ${this.tags}
    </div>
    <div class='time-outs' id="timout-of-${this.id}">
    ${this.delays}
    </div>
</div>`


}
alarm(id){
    document.querySelector('#alarm').play()
    document.getElementById(`${id}`).classList.add('alarm')
}

timeManager() {
        clearInterval(this.timeID)
        if ( this.timeLeft) {
            this.timeID = setInterval(()=> {
                document.querySelector(`#countdown${this.id}`).innerHTML = this.convertTime(this.timeLeft)
                this.timeLeft--
                if (this.timeLeft == 0) {
                this.alarm(this.id)
                }
            }, 1000 );

        } else {
            document.querySelector(`#countdown${this.id}`).innerHTML = "Конец"
            document.querySelector(`#stageNameOf${this.id}`).innerHTML = 'Конец'
            clearInterval(this.timeID)
}}
continue(){
if ( this.timeLeft > 0 ) {
    document.querySelector(`#countdown${this.id}`).innerHTML = this.convertTime(this.timeLeft)
    this.timeID = setInterval(()=> {
        document.querySelector(`#countdown${this.id}`).innerHTML = this.convertTime(this.timeLeft)
        this.timeLeft--
        if (this.timeLeft == 0) {
            this.alarm(this.id)
         }
        if (this.timeLeft <= 0 ){
            document.getElementById(`${this.id}`).classList.add('alarm')
        }
    }, 1000 );
    } else if ( this.timeLeft === 0 ){
        document.querySelector(`#countdown${this.id}`).innerHTML = "Начать"
    } else if (this.timeLeft === "Начать") {
        document.querySelector(`#countdown${this.id}`).innerHTML = "Начать"
    }
}

makeHTML() {
        document.querySelector('.add-new-timer').remove();
        let HTML = document.querySelector('.timerGrid').innerHTML || '';
        document.querySelector('.timerGrid').innerHTML = HTML + this.html + html.addNewTimerBTN
    }


changeStage() {
    this.stage++
    if ( this.stage < this.stageNames.length ) {
    this.timeLeft = this.stageTimes[+(this.stage) - 1]
    this.stageName = this.stageNames[+(this.stage) - 1]
    document.querySelector(`#stageNameOf${this.id}`).innerHTML = this.stageName
    document.querySelector(`#countdown${this.id}`).innerHTML = this.convertTime(this.timeLeft)
    this.timeLeft--
    this.timeManager();
    } else {
        this.timeLeft = 0
        this.timeManager();
    }
    storage.save()
    document.querySelector('#alarm').pause()
    document.querySelector('#alarm').currentTime = 0
    document.getElementById(`${this.id}`).classList.remove('alarm')
}

convertTime(time) {
    if ( time >= 0 ) {
        let hour = Math.floor( time / 60 / 60)
        let minute = Math.floor( time / 60 )
        let second = time % 60
        if ( minute < 10 ) {
            minute = '0' + minute
        }
        if ( second < 10 ) {
            second = '0' + second
        }
        if ( hour < 10 ) {
            hour = '0' + hour
        }
        
    return hour + ':' + minute + ':' + second
    } else {
        time = time * -1
        let hour = Math.floor( time / 60 / 60)
        let minute = Math.floor( time / 60 )
        let second = time % 60
        if ( minute >= 60 ) {
            minute = minute - 60
        }
        if ( minute < 10 ) {
            minute = '0' + minute
        }
        if ( second < 10 ) {
            second = '0' + second
        }
        if ( hour < 10 ) {
            hour = '0' + hour
        }

        if ( minute >= 60 ) {
            minute - 60
            hour++
        }

        this.showDelay(hour, minute, second)

    return '-' + hour + ':' + minute + ':' + second
    }
}
showDelay(hour, minute, second) {
    if ( document.querySelector(`#delayID${this.id}${this.stage}`) ) {
        document.querySelector(`#delayID${this.id}${this.stage}`).innerHTML = 

            `<img class="time-out-icon" src="icons/time.svg" alt="">

            <span class="time-out-value" >-${hour}:${minute}:${second}</span>`

        return;
        }

    document.querySelector(`#timout-of-${this.id}`).innerHTML += 
    
        `<div class="time-out" id="delayID${this.id}${this.stage}">

        <img class="time-out-icon" src="icons/time.svg" alt="">

        <span class="time-out-value" >-${hour}:${minute}:${second}</span>
        
        </div>`

    this.delays = document.querySelector(`#timout-of-${this.id}`).innerHTML
}

}



function addNewTimer(table, isPaid, strenght, tags) {
    let strenghtString = '<img  src="" >' + html.strenght[strenght];
    
    if ( !strenght ) {
        strenghtString = '<img  src="" >'
    }

    const Tags = []
    for (let i = 0; i < tags.length; i++) {
        if (tags[i]) {
            Tags.push(html.tagsHtml[i])
        }
    }

    let newTimer = new Timer ( 
        timers.length, 
        table,
        isPaid,
        strenghtString, 
        Tags
    )

    timers.push(newTimer)
    newTimer.makeHTML();
    closeModal()
    storage.save()
    
}

function deleteTimer(id) {
    
    clearInterval(timers[id].timeID);
    timers[id] = ''
    update()
    
    document.querySelector('#alarm').pause()
    document.querySelector('#alarm').currentTime = 0
}

function update() {
    let temp = [];
    for (let i = 0; i < timers.length; i++) {
        if ( !timers[i] ) {
            continue;
        } else {
           temp.push(timers[i])
        }
    }

        for (let i = 0; i < temp.length; i++) {
            temp[i].id = i;
            temp[i].html = 
`<div class="timer-object" id="${temp[i].id}">
    <div>
        <span class="deleteTimer" onclick="deleteTimer(${temp[i].id})">&#215;</span>
    </div>
    <div class="stage-name" id="stageNameOf${temp[i].id}">
        ${temp[i].stageName}
    </div>
    <div class="countdown"  onclick="timers[${temp[i].id}].changeStage()">
        <div class="time" id="countdown${temp[i].id}" >${temp[i].timeLeft}</div>
    </div>
    <div class="info-block">
        <div class="table-number">
            #${temp[i].table}
        </div>
        <div  onclick="changePaymentStatus(${temp[i].id})" id="is-paid-${temp[i].id}" class="is-paid-${temp[i].isPaid}">
            $
        </div>
    </div>
    <div class="strength-block>
    ${temp[i].strenght}
    </div>
    <div class="tag-block">
        ${temp[i].tags}
    </div>
    <div class='time-outs' id="timout-of-${temp[i].id}">
    ${temp[i].delays}
    </div>
</div>`
    }
    timers = temp
    document.querySelector('.timerGrid').innerHTML = html.addNewTimerBTN;

     for (let i = 0; i < temp.length; i++) {
            timers[i].makeHTML()
    }


    storage.save()
}
function changePaymentStatus (id) {
    document.querySelector(`#is-paid-${id}`).classList.toggle('is-paid-true')
    document.querySelector(`#is-paid-${id}`).classList.toggle('is-paid-false')
    if ( timers[id].isPaid ) {
        timers[id].isPaid = false;
    } else {
        timers[id].isPaid = true;
    }
}


//Тычу палкой в вкладку чтобы не засыпала, заодно провожу переодические сохранения
let o = 0
const ticktock = setInterval(() => {
    if (o) {
        document.title = 'Hookah Timer'
        o = 0
        storage.save()
    } else {
        document.title = 'L8Spot'
        o = 1
        storage.save()
    }
}, 2000);