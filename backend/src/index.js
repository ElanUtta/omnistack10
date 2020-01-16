const express = require('express'); //Importando o express
const mongoose = require('mongoose');
const routes = require('./routes.js')
const setting = require('../settings.js')
const cors = require('cors')

const app = express();

app.use(cors())

//Assim o express entende o JSON e isso vale para todas as rotas.
app.use(express.json())

//Faz o node escutar na porta 3333
app.listen(3333);
//Faz o express utilizar as rotas vindas do arquivo routes
app.use(routes)

//conecta com o servidor mongo atlas 
mongoose.connect(`mongodb+srv://omnistack:${config.senha}@cluster0-huecc.mongodb.net/week10?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});


