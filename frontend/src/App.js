import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from './views/User/Register/Register.jsx';
import Login from './views/User/Login/Login.jsx';
import './App.css';
import Header from './components/Header/Header.jsx';
import Error from './components/Error/Error.jsx'
import Index from './views/Index/Index.jsx'
import Users from './views/User/Users/Users.jsx';
import Profile from './views/User/Profile/Profile.jsx';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/register/" exact component={Register} />
        <Route path="/login/" exact component={Login} />
        <Route path="/users/" exact component={Users} />
        <Route path="/profile/" exact component={Profile} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;