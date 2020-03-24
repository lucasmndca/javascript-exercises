class Service {
    constructor() {
        this.url = 'http://localhost:4000/monsters';
        this.monsterList = new Array();
    }

    getMonsterList() {
        return this.monsterList;
    }

    setMonsterList(monsterList) {
        this.monsterList = monsterList;
    }

    initialDatabaseFetch() {

        let tempMonsterList = new Array();
        
        fetch(this.url, {
            method: 'get',
            headers: {
                "Content-Type": "text/plain"
            },
        }).then(response => {
            response.text()
                .then(result => {
                    tempMonsterList = JSON.parse(result);
                    sortMonstersDefault(tempMonsterList)
                    this.setMonsterList(tempMonsterList);
                }).then(() => {
                    console.log(this.getMonsterList())
                    populateResponse(this.getMonsterList());
                })
        }).catch(err => {
            alert('We could not connect to our database =(')
        });
    }
}