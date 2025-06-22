let timers = []

class Timer {

constructor (id, table, isPaid, strength, tags){
    this.id = id;
    this.table = table;
    this.isPaid = isPaid;
    this.stage = 1;
    this.strenght = strength;
    this.tags = tags;
    this.stageTimes = ['начать', 180, 300, 1800, 1800, 1800, 1800]
    this.stageNames = ["старт", "прогрев", "качество", "первая замена", "вторая замена", "угли+"]
    this.stageName = this.stageNames[0];
    this.timeLeft = this.stageTimes[0];

    this.timeID;  

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
        <div class="is-paid-${this.isPaid}">
            $
        </div>
    </div>
    <div class="tag-block">

    </div>
    <div class='time-outs'>
        <div class="time-out">
            <img class="time-out-icon" src="icons/time.svg" alt="">
            <span class="time-out-value">-0:00</span>
        </div>
    </div>
</div>`

    
}

timeManager() {
    clearInterval(this.timeID)
    if ( this.timeLeft ) {
        this.timeID = setInterval(()=> {
            document.querySelector(`#countdown${this.id}`).innerHTML = this.timeLeft
            this.timeLeft--
        }, 1000 );

    } else {

        clearInterval(this.timeID)

    }
}

makeHTML() {
        document.querySelector('.add-new-timer').remove();
        let HTML = document.querySelector('.timerGrid').innerHTML || '';
        document.querySelector('.timerGrid').innerHTML = HTML + this.html + html.addNewTimerBTN
    }


changeStage() {
    this.stage++
    this.timeLeft = this.stageTimes[+(this.stage) - 1]
    this.stageName = this.stageNames[+(this.stage) - 1]
    document.querySelector(`#stageNameOf${this.id}`).innerHTML = this.stageName
    document.querySelector(`#countdown${this.id}`).innerHTML = this.timeLeft
    this.timeLeft--
    this.timeManager();
}
}



function addNewTimer() {
    let newTimer = new Timer ( 
        timers.length, 
        prompt('table number'), 
        (prompt(('Is paid')) ? true : false), 
        prompt(' strength? '), 
        prompt('tags?') 
    )

    timers.push(newTimer)
    newTimer.makeHTML();
    closeModal()
}

function deleteTimer(id) {
    
    clearInterval(timers[id].timeID);
    timers[id] = ''
    update()
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
        <div class="time" id="countdown${temp[i].id}" >
            ${temp[i].timeLeft}
        </div>
    </div>
    <div class="info-block">
        <div class="table-number">
            #${temp[i].table}
        </div>
        <div class="is-paid-${temp[i].isPaid}">
            $
        </div>
    </div>
    <div class="tag-block">

    </div>
        <div class='time-outs'>
            <div class="time-out">
                <img class="time-out-icon" src="icons/time.svg" alt="">
                <span class="time-out-value">-0:00</span>
            </div>
        </div>
    </div>
</div>`
    }
    timers = temp
    document.querySelector('.timerGrid').innerHTML = html.addNewTimerBTN;

     for (let i = 0; i < temp.length; i++) {
            timers[i].makeHTML()
    }


}