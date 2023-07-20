const express = require("express");

const app = express();

app.use(express.json());



const controllers = require("./controllers/controllers");

// Criar as rotas
app.use("/cadastro", controllers);

app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080: http://localhost:8080")
});