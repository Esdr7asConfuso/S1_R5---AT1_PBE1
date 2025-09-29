const express = require("express");
const app = express();
const PORT = 8081;

app.use(express.json());

const usuario = "admin";
const senha = "1234";

app.post("/login", (req, res) => {
const { usuarios: usuario, senha } = req.body;

if (usuario || senha) {
return res.status(400).json({erro: "Usuário e senha são obrigatórios!"});
}

if (usuario === usuario && senha === senha) {
    return res.json({mensagem: "Login realizado com sucesso!"});
} else {
    return res.status(401).json({erro: `Usuário ${usuarios} ou senha inválidos`});
}
});

app.listen(PORT, () => {
console.log(`Servidor rodando em ${PORT}`);
});
