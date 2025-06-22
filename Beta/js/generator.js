let html = {
    addNewTimerButton: `<div class="add-new-timer" onclick="Make.ModalWindow()">
                        <div class="plus">
                            <img src="icons/addCircle.svg" class="plus-icon">
                        </div>
                        <div class="add-new-timer-text">
                            Добавить новый таймер
                        </div>
                    </div>`,
    timer: `                <div class="timer-object" id="${this.id}">
                    <div>
                        <img class="cross" src="icons/modalCross.svg" alt="">
                    </div>
                <div class="stage-name">
Начало
                </div>
                <div class="countdown">
                    <div class="time">Начать</div>
                </div>
                <div class="info-block">
                    <div class="table-number">
                    #5
                    </div>
                    <div class="is-paid">
                        $
                    </div>
                </div>
                <div class="tag-block">
                    <div class="redTag">ягоды</div>
                    <div class="blueTag">свежесть</div>
                    <div class="wheatTag">выпечка</div>
                    <div class="greenTag">кислость</div>
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
            </div>`,
}
let Make = {
    Save() {
        localStorage.setItem('timers', JSON.stringify(timers))
    },
    
    Load(){
        let storage = '';
        storage = localStorage.getItem('timers')
        if (storage == '') {
            storage = '{}';
        } 
        timers = JSON.parse(storage);
    },

    Start() {
        document.querySelector('.timerGrid').innerHTML = html.addNewTimerButton
        if (timers[0] != undefined) {
        timers.forEach((element) => {
        let newTimer = new Timer(
            element.id,
            element.stage,
            element.timeLeft, 
            element.table, 
            element.isPaid, 
           // element.strength,
            element.blue, 
            element.red, 
            element.wheat, 
            element.orange, 
            element.green, 
            element.yellow);
        newTimer.makeHTML()
    })
        newID = timers.length + 1;
    }
    } ,
    test() {
        let localStorageTest = localStorage.getItem('timers')
        if (localStorageTest == null || localStorageTest == undefined) {
            localStorage.setItem('timers', '')
        }

    },
    ModalWindow() {
        const ModalWindow = document.querySelector('.addNewTimerWindow')
        ModalWindow.style.display = "block";

        },
    

    NewTimer() {
        table = document.querySelector('.tableInput').value;
        let ID = newID;
        if (timers[0] != undefined){        timers.push({
            id: ID,
            table: table,
            isPaid: isPaid,
            stage: 1,
            blue: blue,
            red: red,
            wheat: wheat,
            orange: orange,
            green: green,
            yellow: yellow
        });
        }else{
            timers = [{
            id: ID,
            table: table,
            isPaid: isPaid,
            stage: 1,
            blue: blue,
            red: red,
            wheat: wheat,
            orange: orange,
            green: green,
            yellow: yellow
        }];
        };
        Make.Save();
        Make.Start();

       
        const ModalWindow = document.querySelector('.addNewTimerWindow')
        ModalWindow.style.display = "none";
    },
}