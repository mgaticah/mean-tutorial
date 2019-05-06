const express=require('express');
const app=express();
const morgan=require('morgan');
const {mongoose}=require('./database');
//Settings
app.set('port',process.env.PORT || 3000);
//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(require('./routes/employee.routes'));
//Arranque de servidor
app.listen(app.get('port'), ()=>{
    console.log('Servidor en puerto '+app.get('port'));
});