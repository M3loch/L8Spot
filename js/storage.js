const storage = {
    save() {
        let memory = [];
        if (timers.length > 0) {
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
                    delays: elem.delays,
                });
            });
        }
        localStorage.setItem('Storage', JSON.stringify(memory));
    },

    load() {
        let memory = JSON.parse(localStorage.getItem('Storage'));
        if (!memory) {
            return;
        }
        memory.forEach((elem) => {
            let newTimer = new Timer(
                elem.id,
                elem.table,
                elem.isPaid,
                elem.strenght,
                elem.tags,
                elem.timeLeft,
                elem.stage,
                elem.timeID,
                elem.delays
            );
            timers.push(newTimer);
            newTimer.makeHTML();
            newTimer.continue();
        });
    },
};