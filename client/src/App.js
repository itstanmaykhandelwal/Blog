import React, { useContext } from 'react';
import Home from './pages/home/Home';
import TopBar from './components/topbar/TopBar';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Context } from './context/Context';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact'

const App = () => {
  const {user} = useContext(Context)
  return (
    <Router>
      <TopBar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/register">{user ? <Home/> : <Register />} </Route>
        <Route path="/login">{user ? <Home/> : <Login />} </Route>
        <Route path="/write">{user ? <Write /> : <Login/>} </Route>
        <Route path="/settings">{user ? <Settings /> : <Login/>}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

