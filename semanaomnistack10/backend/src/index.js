const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

//criando a aplicação
const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-edjru.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });

// le as requisições json
app.use(express.json()); 
app.use(routes);
app.listen(3333);
