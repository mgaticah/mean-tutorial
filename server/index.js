const express=require('express');
const app=express();

//Settings
app.set('port',process.env.PORT || 3000);
//Middlewares
//Routes

//Arranque de servidor
app.listen(app.get('port'), ()=>{
    console.log('Servidor en puerto 3000');
});