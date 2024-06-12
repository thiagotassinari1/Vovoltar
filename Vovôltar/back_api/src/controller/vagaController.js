const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeVaga(request, response) {
    
    const params = Array(
        request.body.area,
        request.body.email_empresa,
        request.body.cidade,
        request.body.estado,
        request.body.qtd_vagas,
    );

    const query = 'INSERT INTO vagas(area,email_empresa,cidade,estado,qtd_vagas) VALUES(?,?,?,?,?)';

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Ops, deu problema!",
                    data: err
                })
        }
    })
}

module.exports = {
    storeVaga
}