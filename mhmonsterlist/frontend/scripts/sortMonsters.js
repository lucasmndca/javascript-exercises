function handleFilter() {
    let filterList = document.getElementById('filter');
    let selectedOption = filterList.options[filterList.selectedIndex].value;
    return runProperFilter(selectedOption);
}

function runProperFilter(option) {
    const filters = {
        default: sortMonstersDefault,
        nomeCres: sortMonstersByNameAsc,
        nomeDec: sortMonstersByNameDesc,
        ataqueCres: sortMonstersDefault,
        ataqueDec: sortMonstersByAttackDesc,
        defesaCres: sortMonstersByDefenseAsc,
        defesaDec: sortMonstersByDefenseDesc
    }
    return filters[option]();
}

function sortMonstersDefault(list) {
    if(list) {
        list.sort((a, b) => {
            return a.ataque - b.ataque;
        });
    } else {
        monsters.sort((a,b) => {
            return a.ataque - b.ataque;
        })
        clearTarget();
        populateResponse(monsters);
    }
}

function sortMonstersByNameAsc() {
    monsters.sort((a, b) => {
        if (a.nome < b.nome) { return -1; }
        if (a.nome > b.nome) { return 1; }
        return 0;
    });
    clearTarget();
    populateResponse(monsters);
}

function sortMonstersByNameDesc() {
    monsters.sort((a, b) => {
        if (a.nome > b.nome) { return -1; }
        if (a.nome < b.nome) { return 1; }
        return 0;
    });
    clearTarget();
    populateResponse(monsters);
}

function sortMonstersByAttackDesc() {
    monsters.sort((a, b) => {
        if (a.ataque > b.ataque) { return -1; }
        if (a.ataque < b.ataque) { return 1; }
        return 0;
    });
    clearTarget();
    populateResponse(monsters);
}

function sortMonstersByDefenseAsc() {
    monsters.sort((a, b) => {
        if (a.defesa < b.defesa) { return -1; }
        if (a.defesa > b.defesa) { return 1; }
        return 0;
    });
    clearTarget();
    populateResponse(monsters);
}

function sortMonstersByDefenseDesc() {
    monsters.sort((a, b) => {
        if (a.defesa > b.defesa) { return -1; }
        if (a.defesa < b.defesa) { return 1; }
        return 0;
    });
    clearTarget();
    populateResponse(monsters);
}