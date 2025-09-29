const express = require("express");
const app = express();
const PORT = 8081;

app.use(express.json());

// Rota 
app.post("/soma", (req, res) => {
const { num1, num2, num3 } = req.body;

  // Verificação dos valores recebidos
const erros = [];

if (isNaN(num1)) erros.push("num1 não é um valor numérico válido");
if (isNaN(num2)) erros.push("num2 não é um valor numérico válido");
if (isNaN(num3)) erros.push("num3 não é um valor numérico válido");

  // Se tiver alguns erros ele vai retornar para o cliente
if (erros.length > 0) {
    return res.status(400).json({
    mensagem: "Erro de validação nos parâmetros",
    erros,
    });
}

  // Se todos forem válidos ele faz a soma
const soma = parseFloat(num1) + parseFloat(num2) + parseFloat(num3);

return res.json({
mensagem: "Soma realizada com sucesso",
resultado: soma,
});
});

// Inicia o servidor
app.listen(PORT, () => {
console.log(`Servidor rodando em ${PORT}`);
});