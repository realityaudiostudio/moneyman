import React from 'react'
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children})=>{
    const {user} = useContext(UserContext);
    if(!user){
        return <Navigate to="/login" replace/>
    }
  return children;
}

export default ProtectedRoute;