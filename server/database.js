const mongoose=require('mongoose');
const uri='mongodb://mongoadm:123@localhost/employeesDb'
mongoose.connect(uri).then(
    db=>{
        console.log('Base de datos conectada');
    }
).catch(err=>{
    console.error(err);
});
module.exports=mongoose;