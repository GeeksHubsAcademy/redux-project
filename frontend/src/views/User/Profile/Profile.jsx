import React, { useState } from 'react';
import { connect } from 'react-redux';
import {updateProfile} from '../../../redux/actions/user.js'
const Profile = ({ user }) => {

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);

    const [errorEmail, setErrorEmail] = useState(user.errorEmail);
    const [errorPassword, setErrorPassword] = useState(user.errorPassword);
    const handleChange = event => {
        switch (event.target.name) {
            case 'name':
                setName(event.target.value)
                break;
            case 'email':
                setEmail(event.target.value)
                break;
            case 'password':
                setPassword(event.target.value)
                break;

            default:
                break;
        }
    }
    const handleSubmit=event=>{
        event.preventDefault();
        updateProfile({name, email, password})
    }
    return <div className="profile">
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Introduzca su nombre"
                onChange={handleChange} value={name} />

            <input type="text" name="email" placeholder="Introduzca su email"
                onChange={handleChange} value={email} />

            <div className="error"> {errorEmail} </div>

            <input type="password" name="password" placeholder="Introduzca su contraseña"
                onChange={handleChange} value={password} />

            <div className="error"> {errorPassword} </div>

            <button type="submit">Enviar</button>
        </form>
    </div>
}
const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}
export default connect(mapStateToProps)(Profile);