import store from '../store';
import axios from 'axios';

export const registerUser = async({name, email, password}) => {
    const res = await axios.post( 'http://localhost:3001/users/register', {
        name,email,password
    } )
    const action = {
        type: 'REGISTER',
        payload: res.data.user,
    }
    store.dispatch( action )
    return res;
}
