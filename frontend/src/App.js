// import React from 'react';
// import Counter from './components/Counter/Counter.jsx';
// import Register from './components/User/Register/Register.jsx'
// class App extends React.Component {

//   render() {
//     return (
//         <Counter start={1} />
//     )
//   }

// }
// export default App;



import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from './views/User/Register/Register.jsx';
import Login from './views/User/Login/Login.jsx';
import './App.css';
import Header from './components/Header/Header.jsx';
import Error from './components/Error/Error.jsx'
const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = props =>{
return <h2>
Usuario número:{props.match.params.id}
   <br/> 
   Users
   </h2>;

}


function App() {
  return (
    <BrowserRouter>
        <Header/>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/about/" exact component={About} />
        <Route path="/users/:id/" exact component={Users} />
        <Route path="/register/"  component={Register} />
        <Route path="/login/"  component={  Login } />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;