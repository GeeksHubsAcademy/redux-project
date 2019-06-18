const mongoose = require( 'mongoose' );

mongoose.connect( 'mongodb://localhost:27017/Register', { useNewUrlParser: true } )
.then( () => console.log( 'conectado a mongoDB' ) )
.catch(error=>console.log('Error al conectar a MongoDB: '+error))