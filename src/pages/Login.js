import React from 'react'
import {useContext} from 'react';
import {LoginContext} from '../Helper/Context';
function Login() {
  const {loggedIn, setLoggedIn}=useContext(LoginContext);
  return (
    <div>
  this is login page (" ") <button onClick={() => setLoggedIn(true)}>Click here to loggin</button>
  {loggedIn ? <h1>you logged in</h1> : <h1>you are not logged in</h1>}
    </div>
  )
}

export default Login