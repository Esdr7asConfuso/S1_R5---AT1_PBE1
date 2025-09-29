const express = require("express");
const app = express();
const PORT = 8081;

app.use(express.json());

app.post("/mensagem", (req, res) => {
const { nome, idade, time } = req.body;

if (!nome || idade === undefined || !time) {
    return res.status(400).json({ erro: "Envie nome, idade e time favorito" });
}

res.json({
mensagem: `Olá, ${nome}, Você tem ${idade} anos e torce para o ${time}!`,
});
});


app.listen(PORT, () => {
console.log(`Servidor rodando na porta ${PORT}`);
});