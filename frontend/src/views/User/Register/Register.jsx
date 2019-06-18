import React from 'react';
import axios from 'axios';
import './Register.css';
import { isEmail } from 'validator';
import store from '../../../redux/store.js'
class Register extends React.Component { //componente de clase

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            lastname: "",
            email: "",
            password: "",
            errorEmail: "",
            errorPassword: "",
            backendInfo: ""
        }
        this.emailInput = React.createRef()
    }

    handleSubmit = async event => {
        try {
            event.preventDefault();
            await this.validateForm();
            if (this.state.errorEmail.length === 0 && this.state.errorPassword.length === 0) {
                const res = await axios.post('http://localhost:3001/users/register', {
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                })
                console.log(res.data);
                const action = {
                    type: 'REGISTER',
                    payload:res.data.user,
                }
                store.dispatch(action)
                this.setState({ backendInfo: res.data.info });
            }
        }
        catch (error) {
            console.error(error)
        }

    }
    validateForm = () => {
        return new Promise((resolve, reject) => {
            this.validateEmail();
            this.validatePassword();
            resolve('form validado')
        })
    }
    validatePassword = () => {
        const password = this.state.password
        if (password.length === 0) this.setState({ errorPassword: "password is required" })
        else if (password.length < 8) this.setState({ errorPassword: "password must be at least 8 characters" })
        else this.setState({ errorPassword: "" })
    }
    validateEmail = () => {
        if (this.state.email.length === 0) this.setState({ errorEmail: "Email is required" });
        else if (!isEmail(this.state.email)) this.setState({ errorEmail: "must be an email" });
        else this.setState({ errorEmail: "" })
    }

    handleChange = event => this.setState({ [event.target.name]: event.target.value })

    render() {
        return (
            <form className="register" onSubmit={this.handleSubmit}>

                <input type="text" name="name" placeholder="Introduzca su nombre"
                    onChange={this.handleChange} value={this.state.name} />

                <input type="text" name="email" placeholder="Introduzca su email"
                    onChange={this.handleChange} value={this.state.email} ref={this.emailInput} />

                <div className="error"> {this.state.errorEmail} </div>

                <input type="password" name="password" placeholder="Introduzca su contraseña"
                    onChange={this.handleChange} />
                <div className="error"> {this.state.errorPassword} </div>

                <button type="submit">Enviar</button>
                <div className="info">{this.state.backendInfo}</div>
            </form>
        )

    }
}
export default Register;