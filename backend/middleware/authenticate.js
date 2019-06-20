const jwt = require( 'jsonwebtoken' )
const SECRET_AUTH_JWT = require( '../config/password.js' ).SECRET_AUTH_JWT;
const UserModel=require('../models/User.js')

const isAuthenticated = async ( req, res, next ) => {
    try {
    const token=req.headers.authenticate //cogemos el token de la cabecera de la petición
    console.log(token)
    const _id = jwt.verify( token, SECRET_AUTH_JWT )._id //aquí sacamos el _id del usuario
   const user=await UserModel.findOne({_id, //buscamos un usuario que tenga ese id y el token este en la base de datos
        tokens:{
            $elemMatch:{
                type:"auth",
                token
            }
        }
    })
    if(!user) return res.status(401).send('You are not authorized');
    req.user=user; //aquí paso el user como info de la request
    return next();
    } catch (error) {
       return res.status(500).send(error)
    }
}
module.exports = isAuthenticated
