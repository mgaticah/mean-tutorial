const express=require('express');
const app=express();
const morgan=require('morgan');

//Settings
app.set('port',process.env.PORT || 3000);
//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes

//Arranque de servidor
app.listen(app.get('port'), ()=>{
    console.log('Servidor en puerto '+app.get('port'));
});