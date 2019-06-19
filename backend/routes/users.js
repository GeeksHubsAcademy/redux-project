const router = require( 'express' ).Router();
const UserModel = require( '../models/User' );

router.post( '/register', async ( req, res ) => {
    try {
        const user = await new UserModel( {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        } ).save()
        res.status( 201 ).send( {
            info: "User successfully created",
            user
        } )
    } catch ( error ) {
        console.log( error );
        res.status( 400 ).send( error )
    }
} );

router.get( '/all', async ( req, res ) => {
    try {
        const users = await UserModel.find( {} )
        res.status( 200 ).send( users )
    } catch ( error ) {
        console.log( error )
        res.status( 500 ).send( error )
    }
} );
router.post('/login', async (req,res)=>{
   const user=await UserModel.findOne({
        email:req.body.email,
        password:req.body.password})
        if(!user) return res.status(400).send('wrong crendentials')
        res.send({info:'Welcome back', user})
})
module.exports = router;
