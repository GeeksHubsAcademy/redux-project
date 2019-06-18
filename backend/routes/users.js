const router = require( 'express' ).Router();
const UserModel = require( '../models/User' );

router.post( '/register', async ( req, res ) => {
    try {
        const user = await new UserModel( {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        } ).save()
        res.send({
             info: "User successfully created",
             user 
            })
    } catch ( error ) {
        console.log( error )
    }
} )

module.exports = router;
