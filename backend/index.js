const express = require('express'); //Importando o express
const mongoose = require('mongoose');

const app = express();

//conecta com o servidor mongo atlas 

mongoose.connect('mongodb+srv://omnistack:dugstor21@cluster0-huecc.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Assim o express entende o JSON e isso vale para todas as rotas.
app.use(express.json())

// Tipos de Parâmetros

//Query Params: acesso usando = "request.query" (Filtros, ordenação, paginação, ...) Utilizado no GET, para criar querys
//Route Params: acesso usando = "request.params" (Identificar um rescurso na alteração ou remoção)
//Body: request.body (Criar e passar grandes dados)

//mongoDB

app.post('/users', (request, response) => {
    console.log((request.body))
    return response.json({ message: "Hello Elan!!" })
});

app.listen(3333);
