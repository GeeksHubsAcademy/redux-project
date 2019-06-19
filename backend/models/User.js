const mongoose=require('mongoose');

const userSchema = new mongoose.Schema( {
    name:  String,
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
}, {
    timestamps: true
} );

userSchema.methods.toJSON=function () {
    const user=this._doc;
    delete user.password
    return user;
}

const userModel=mongoose.model('user',userSchema);
module.exports=userModel;