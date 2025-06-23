//constructor (id, table, isPaid, strengthString, tags, timeLeft = 0, stage = 0 timeID){
// this.id = id;
// this.table = table;
// this.isPaid = isPaid;
// this.strenght = strengthString;
// this.stageTimes = ['Начать', 180, 300, 1200, 1200, 1200, 1200]
// this.stageNames = ["Старт", "Прогрев", "Качество", "Первая замена", "Вторая замена", "Угли+", "Жизнь кальяна"]
// this.timeLeft = timeLeft
// this.stage = stage
// }

// this.stageName = this.stageNames[this.stage - 1];

// this.timeID;


// console.log(this.strenght)

// let tagString = '';
// for (let i = 0; i < tags.length; i++) {
//     tagString += tags[i]
// }
// console.log(tagString)
// this.tags = tagString;


const storage = {
    save(){
        let memory = []
        if ( timers.length > 0 ) {
            timers.forEach((elem) => {
                memory.push({
                   id: elem.id,
                   table: elem.table,
                   isPaid: elem.isPaid,
                   strenght: elem.strenght,
                   tags: elem.tags,
                   timeLeft: elem.timeLeft,
                   stage: elem.stage,
                   timeID: elem.timeID,
                   delays: elem.delays
                })
            })
        }
        localStorage.setItem('Storage', JSON.stringify(memory))
        
    },
    load(){
        console.log('loadStarted')
        let memory = JSON.parse(localStorage.getItem('Storage'))
        if(!memory){
            return
        }
        memory.forEach((elem) => {
            let newTimer = new Timer ( 
                elem.id, 
                elem.table,
                elem.isPaid,
                elem.strenght, 
                elem.tags,
                elem.timeLeft,
                elem.stage,
                elem.timeID,
                elem.delays
            )
            timers.push(newTimer)
            newTimer.makeHTML()
            
            newTimer.continue()
        })
    }
}