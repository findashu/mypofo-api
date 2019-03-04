const express = require('express');
const mongoose = require('mongoose');
const index = require('./routes/index');
const config = require('./config/'+require('./config/env'));
const project = require('./routes/project');
const appMiddleware = require('./middlewares/app-middleware')

const app = express();

mongoose.connect(config.dbUrl, {useNewUrlParser:true}, function(err, data)  {
    if(err) {
        console.log('Unable to connect db', err)
    }else {
        console.log('Connected with DB')
    }
});


app.use(express.json());
app.use(express.urlencoded({extended:false})); 


app.use('/', index);
app.use('/projects', project)

app.use(appMiddleware.notFound);
app.use(appMiddleware.error)

app.listen(config.port,() => console.log('API Up and Running on port 3000'))