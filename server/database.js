const mongoose=require('mongoose');
const uri='mongodb://localhost:27017/employeesDb'
mongoose.connect(uri, { useNewUrlParser: true }).then(
    db=>{
        console.log('Base de datos conectada');
    }
).catch(err=>{
    console.error(err);
});
module.exports=mongoose;