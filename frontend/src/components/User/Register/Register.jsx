import React from 'react';
import axios from 'axios';
import './Register.css';
class Register extends React.Component { //componente de clase

    constructor(props) {
        super(props);
        this.state = {
            name:"",
            email:"",
            password:"",
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        
            axios.post('http://localhost:3001/register',{
                name:event.target.name.value,
                email:event.target.email.value,
                password:event.target.password.value,
            })
            .then(res=>console.log(res.data))
            .catch(error=>console.log(error.message))
         
    }
    render() {
        return (
            <form className="register" onSubmit={this.handleSubmit}>
                <input type="text" name="name" placeholder="Introduzca su nombre" />
                <input type="email" name="email" placeholder="Introduzca su email" />
                <input type="password" name="password" placeholder="Introduzca su contraseña" />
                <button type="submit">Enviar</button>
            </form>
        )

    }
}
export default Register;