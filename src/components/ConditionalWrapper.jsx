// src/ConditionalWrapper.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Port from './Portfolio/Port';
import BasicTable from './Table/Table';

function ConditionalWrapper({ children }) {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/signup';

  return (
    <>
      {!isLoginPage && !isSignupPage && <Navbar />}
      {children}
      {!isLoginPage && !isSignupPage && (
        <>
          <Port />
          <BasicTable />
        </>
      )}
    </>
  );
}

export default ConditionalWrapper;
