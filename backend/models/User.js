const mongoose=require('mongoose');

const userSchema = new mongoose.Schema( {
    name: {
        type: String,
        maxlength: 40,
    },
    lastname: String,
    email: {
        type: String,
        unique: true,
        required: true,
        validate: function ( email ) {
            return new Promise( function ( resolve ) {
                setTimeout( function () {
                    resolve( isEmail( email ) );
                }, 5 );
            } );
        },

    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        minlength: 8,
        required: true,
    },
    confirmedEmail: Boolean
}, {
    timestamps: true
} );

const userModel=mongoose.model('user',userSchema);
module.exports=userModel;