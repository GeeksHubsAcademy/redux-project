import store from '../store';
import axios from 'axios';


export const registerUser = async ( { name, email, password } ) => {
    const res = await axios.post( 'http://localhost:3001/users/register', {
        name,
        email,
        password
    } )
    const action = {
        type: 'REGISTER',
        payload: res.data.user,
    }
    localStorage.setItem('authToken',res.data.token) //añadimos el token al localStorage
    store.dispatch( action )
    return res;
}
export const getAllUsers = async () => {
    try {
        const res = await axios.get( 'http://localhost:3001/users/all' ); // hago la petición de todos los usuarios al backend
        
        const action = {
            type: 'GET_ALL',
            payload: res.data
        }
        store.dispatch( action );
    } catch ( error ) {
        console.log( error )
    }
}

export const updateProfile =async(user)=>{
    try{
        const token=localStorage.getItem('authToken'); //sacamos del localStorage el token
        if(!token) throw new Error('you are not authenticated');// si no hay token le enviamos error
        const res=await axios.patch('http://localhost:3001/users/updateProfile', user,{
            headers:{
                authenticate:token
            }
        });
        
    }catch(error){
        console.log(error)
    }
}