var mongoose = require("mongoose");
var userSchema = require('./libroSchema');

//Conexión
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/libros',{useMongoClient:true});

//Modelo
//parametros('como sera llamado en js',esquema,'como se llama la colleción en mongo')
var Libro = mongoose.model('Libro',userSchema,'libro');

var libro= new Libro({
    title: "Antes de ti",
    author: "Yoyo",
    body: "Historia de drama-romance"
});

libro.save(function(error){
    if(erro){
        console.log(error);
        process.exit(1);
    }
    console.log("Guardado");
    process.exit(0);
});

//Buscar por author
Libro.find({author:'Yoyo'}, 
    function(error, docs){
        if(error){
            console.log(error);
            process.exit(1);
        }
        console.log("Consulta Especifica");
        console.log(docs);
        process.exit(0);
    });
//Actualizacion
User.update({_id : ObjectId('5b45aabae2bbf424d29233a0')},{$set:{email:'plop@ittepic.edu.mx'}},
function(error, docs){
    if(error,docs){
        console.log(error);
        process.exit(1);        
    }
    console.log("Actualizacion");
    console.log(docs);
    process.exit(0)
});
