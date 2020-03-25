const express = require('express');

const app = express();

app.listen(3333);

app.get('/users', (request, response) => {

    const params = request.query;
    console.log(params);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Lucas Fazzi'
    });
});