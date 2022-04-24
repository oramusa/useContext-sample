import React from 'react';
import {useContext} from 'react';
import {LoginContext} from '../Helper/Context';

function Profile() {
  const {loggedIn, setLoggedIn}=useContext(LoginContext);
  return (
    <div>Profile
      {loggedIn ? <h1>you logged in</h1> : <h1>you are not logged in</h1>}
    </div>

  )
}

export default Profile