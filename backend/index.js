const express = require( 'express' );
const app = express();
const mongoose = require( 'mongoose' );
const userRouter=require('./routes/users');

mongoose.connect( 'mongodb://localhost:27017/Register', { useNewUrlParser: true } )
    .then( () => console.log( 'conectado a mongoDB' ) )
    .catch(error=>console.log('Error al conectar a MongoDB: '+error))

app.use( function ( req, res, next ) { // permite peticiones de otros dominios
    res.header( "Access-Control-Allow-Origin", "*" );
    res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
    res.header( "Access-Control-Allow-Methods", "GET, POST, PUT, PATCH" );
    next();
} );
app.use( express.json() ) // parsea el body de la petición a JSON

app.use('/users',userRouter);

app.listen( 3001, () => console.log( "servidor levantado en 3001" ) )