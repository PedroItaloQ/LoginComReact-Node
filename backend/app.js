const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    //Qualquer endereço pode fazer a requisição
    res.header("Access-Control-Allow-Origin", "*");
    //Tipos de métodos que a API aceita
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    //Permitir o envio de dados para a API
    res.header("Access-Control-Allow-Headers", "Content-Type")
    //Executar a cors
    app.use(cors());
    //Quando não houver error deve continuar o processamento
    next();
})

const messages = require("./controllers/controllers");

// Criar as rotas
app.use("/message", messages);

app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080: http://localhost:8080")
});