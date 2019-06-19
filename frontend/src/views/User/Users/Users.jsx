// import React from 'react';
// import axios from 'axios';
// class Users extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             users: [],
//         }
//     }

//     async componentDidMount() {
//         console.log(' el componente se ha montado y la petición ha sido enviada')
//         try {
//             const res = await axios.get('http://localhost:3001/users/all');// hago la petición de todos los usuarios al backend
//             this.setState({ users: res.data });// seteo la propiedad users del state con los usuarios que llegan desde el backend
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     componentDidUpdate() {
//         console.log('el componente se ha vuelto a renderizar');
//     }
//     componentWillUnmount(){
//         console.log('el componente se ha desmontado');
//     }
//     render() {
//         return (
//             <div className="users">
//                 Estos son los usuarios:
//                 {this.state.users.map(user => (
//                     <div key={Date.now() + Math.random()}>
//                         <h3>{user.name}</h3>
//                         <span>{user.email}</span>
//                     </div>
//                 ))}
//             </div>
//         )
//     }
// }

// export default Users;

import React from 'react';
import axios from 'axios';
import {connect } from 'react-redux';
import store from '../../../redux/store';
import {getAllUsers} from '../../../redux/actions/user'
class Users extends React.Component {
    async componentDidMount() {
       try {
            // const res = await axios.get('http://localhost:3001/users/all');// hago la petición de todos los usuarios al backend
            // store.dispatch({
            //     type:'GET_ALL',
            //     payload:res.data
            // });
            getAllUsers()
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        return (
            <div className="users">
                Estos son los usuarios:
                {this.props.users && this.props.users.map(user => (
                    <div key={user._id}>
                        <h3>{user.name}</h3>
                        <span>{user.email}</span>
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return {
        users:state.userReducer.users 
    }
}
export default connect(mapStateToProps)(Users);