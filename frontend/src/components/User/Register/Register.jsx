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
        
    this.name = React.createRef();
    this.email=React.createRef();
    }
    handleSubmit = async event => {
        event.preventDefault();
        
            axios.post('http://localhost:3001/users/register',{
                name:event.target.name.value,
                email:event.target.email.value,
                password:event.target.password.value,
            })
            .then(res=>console.log(res.data))
            .catch(error=>console.log(error.message))
         
    }
    handleChange=event=>this.setState({[event.target.name]:event.target.value})
    render() {
        return (<div>
            <form className="register" onSubmit={this.handleSubmit}>
                <input type="text" name="name" placeholder="Introduzca su nombre"  onChange={this.handleChange}/>
                <input type="email" name="email" placeholder="Introduzca su email" onChange={this.handleChange}/>
                <input type="password" name="password" placeholder="Introduzca su contraseña" onChange={this.handleChange}/>
                <button type="submit">Enviar</button>
            </form>
            {this.state.name}
            </div>
        )

    }
}
export default Register;