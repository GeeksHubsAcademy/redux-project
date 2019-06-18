import React from 'react';
import axios from 'axios';
import './Register.css';
import {isEmail} from 'validator'
class Register extends React.Component { //componente de clase

    constructor(props) {
        super(props);
        this.state = {
            name:"",
            lastname:"",
            email:"",
            password:"",
            validForm:true,
            errorEmail:"",
            errorPassword:"",
        }
        this.emailInput=React.createRef()
    }  

    handleSubmit =  event => {
        event.preventDefault();
        this.validateForm();
        if(this.state.validForm){
        axios.post('http://localhost:3001/users/register',{
                name:event.target.name.value,
                email:event.target.email.value,
                password:event.target.password.value,
            },)
            .then(res=>console.log(res.data)) 
            .catch(error=>console.log(error.response.data)) 
        }
    }
    validateForm=()=>{
        // this.validateName();
        this.validateEmail();
        this.validatePassword();
    }
    validatePassword=()=>{
        console.log(this.state.password)
        const password=this.state.password
        if(password.length===0)  this.setState({validForm:false, errorPassword:"password is required"})
        else if ( password.length<8 ){
            this.setState({validForm:false, errorPassword:"password must be at least 8 characters"})
        }
    }
    validateEmail=()=>{
        if(this.state.email.length===0) this.setState({validForm:false, errorEmail:"Email is required"});
        else if(!isEmail(this.state.email)) this.setState({validForm:false,errorEmail:"must be an email"});
    }

    handleChange=event=> this.setState({[event.target.name]:event.target.value})
    
    render() {

        if(this.props.history.location.hash==="#email" && this.emailInput.current )this.emailInput.current.focus()
        return (
        <div>
            
            <form className="register" onSubmit={this.handleSubmit}>

            <input type="text" name="name" placeholder="Introduzca su nombre" 
                 onChange={this.handleChange} value={this.state.name}/>

                 <input type="text" name="lastname" placeholder="Introduzca su appelido" 
                 onChange={this.handleChange} value={this.state.lastname}/>

                 
                <input type="text" name="email" placeholder="Introduzca su email"
                 onChange={this.handleChange} value={this.state.email} ref={this.emailInput}/>

                <div className="error"> {this.state.errorEmail} </div>

                <input type="password" name="password" placeholder="Introduzca su contraseña"
                 onChange={this.handleChange}/>
                 
                <div className="error"> {this.state.errorPassword} </div>

                 <button type="submit">Enviar</button>
            </form>
            <br/>
            {this.state.name}
            <br/>
            {this.state.email}
            <br/>

            </div>
        )

    }
}
export default Register;