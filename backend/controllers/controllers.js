const express = require('express');

//Incluir a conexão com o banco de dados
const db = require("../db/models");

const cors = require('cors');

const router = express.Router();

//Criar a rota cadastrar
router.post("/", async (req, res) => {

    // Receber os dados enviados no campo da requisição
    var data = req.body;

    //Validar os dados enviados pelo formulario


    

    //Salvar no banco de dados
    await db.Cadastro.create(data).then((dataMessage) => {
        return res.json({
            error: false,
            message: "Mensagem cadastrada com sucesso!",
            data: dataMessage
        });

    }).catch(() => {
        return res.status(400).json({
            error: true,
            message: "Mensagem não cadastrada!"
        });
    });
});

module.exports = router;