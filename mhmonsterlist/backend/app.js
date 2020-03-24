let express = require("express");
let cors = require("cors");
let app = express();
const port = "4000";

app.use(cors());

app.get("/monsters", (req, res, next) => {
    res.json([
        {nome: "Congalala", tipo: "Pelagus", nivel: 2, ataque: 1300, defesa: 800, elemento: "---", alimento: "---"},
        {nome: "Pukei-Pukei", tipo: "Flying Wyvern", nivel: 2, ataque: 1100, defesa: 950, elemento: "---", alimento: "Poison"},
        {nome: "Khezu", tipo: "Flying Wyvern", nivel: 2, ataque: 1500, defesa: 1050, elemento: "Thunder", alimento: "---"},
        {nome: "Rathalos", tipo: "Flying Wyvern", nivel: 4, ataque: 2500, defesa: 1800, elemento: "Fire", alimento: "Poison"}
    ]);
});

app.listen(port, () => {
 console.log(`Server running on port ${port}`);
});