const express = require('express');

//Incluir a conexão com o banco de dados
const db = require("../db/models");

const yup = require("yup")

const router = express.Router();

//Criar a rota cadastrar
router.post("/", async (req, res) => {

    // Receber os dados enviados no campo da requisição
    var data = req.body;

    //Validar os dados enviados pelo formulario
    let schema = yup.object().shape({
        password: yup.string('Erro ao cadastrar assunto - B!')
            .required('Erro ao cadastrar assunto - B!'),
        email: yup.string('Erro ao cadastrar email - B!')
            .email("Erro ao cadastrar email - B!")
            .required('Erro ao cadastrar email - B!')
    });

    try{
        await schema.validate(data);
    } catch(error) {
        return res.status(400).json({
            error: true,
            message: error.errors
        });
    }

    //Salvar no banco de dados
    await db.Cadastros.create(data).then((dataMessage) => {
        return res.json({
            error: false,
            message: "Mensagem cadastrada com sucesso!",
            data: dataMessage
        });

    }).catch(() => {
        return res.status(400).json({
            error: true,
            message: "Mensagem cadastrada com sucesso!"
        });
    });
});

module.exports = router;