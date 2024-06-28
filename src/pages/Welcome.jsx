import React from 'react';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';


function Welcome() {
  const {user} = useContext(UserContext);

  return (
    <div>
        <h1>Howdy {user.name},Nice to meet u!</h1>
    </div>
  )
}

export default Welcome