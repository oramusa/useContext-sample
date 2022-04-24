import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import {LoginContext} from './Helper/Context';

function App() {
  const [loggedIn,setLoggedIn]=useState(false)
  return (
 <LoginContext.Provider value={{loggedIn,setLoggedIn}}>
    <Home/>
    <Login/>
    <Profile/>
 </LoginContext.Provider>
  );
}

export default App;
