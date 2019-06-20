const mongoose = require( 'mongoose' );
const jwt = require( 'jsonwebtoken' );
const SECRET_AUTH_JWT = require( '../config/password' ).SECRET_AUTH_JWT;
const userSchema = new mongoose.Schema( {
    name: String,
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        minlength: 8,
        required: true,
    },
    tokens: [ { //nuevo campo array de tokens
        token: { //string del jsonwebtoken
            type: String,
            required: true,
        },
        type: { //string que indica el tipo de token por ejemplo: "auth" {type:"auth", token:"eyJf48es4f84s8"}
            type: String,
            required: true,
        },
    } ]
}, {
    timestamps: true // añade los campos createdAt y updatedAt
} );

userSchema.methods.toJSON = function () {
    const user = this._doc;
    delete user.password;
    delete user.tokens;
    return user;
}

userSchema.methods.generateAuthToken = function () {
    const user = this;
    const token = jwt.sign( {_id:user._id}, SECRET_AUTH_JWT, { expiresIn: "7d" } ); //aquí generamos el token con el secret
    user.tokens = [ ...user.tokens,  { token, type: "auth" } ] //aquí añadimos el token a la array de tokens del usuario
    
    return user.save().then(()=>token) //guarda el usuario actualizado con el nuevo token en la base de datos y devuelve una promesa con el token
    .catch(console.log)
    }

const userModel = mongoose.model( 'user', userSchema );
module.exports = userModel;
