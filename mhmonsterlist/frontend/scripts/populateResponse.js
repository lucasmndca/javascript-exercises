function populateResponse(monsters) {
    const target = document.getElementById("tbody");
    for (let i = 0; i < monsters.length; i++) {
        target.innerHTML += (
            `<tr><td>${monsters[i].nome}</td>
            <td>${monsters[i].tipo}</td>
            <td style="text-align:center;">${monsters[i].nivel}</td>
            <td style="text-align:center;">${monsters[i].ataque}</td>
            <td style="text-align:center;">${monsters[i].defesa}</td>
            <td style="text-align:center;">${monsters[i].elemento}</td>
            <td style="text-align:center;">${monsters[i].alimento}</td>
            </tr>`
        );
    }
}

function clearTarget() {
    const target = document.getElementById("tbody");
    target.innerHTML = "";
}