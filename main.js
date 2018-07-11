var mongoose = require("mongoose");
var userSchema = require('./userSchema');

//Conexión
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/alumnos',{useMongoClient:true});

//Modelo
//parametros('como sera llamado en js',esquema,'como se llama la colleción en mongo')
var User = mongoose.model('User',userSchema,'user2');

//Documento en RAM
var user = new User({
    name: "Ana",
    email:"anpasanchezji@ittepic.edu.mx",
    password:"plop"
});

//Documento en MongoDB
user.save((error,data)=>{
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log('Guardado!'+data);
    process.exit(0);

});