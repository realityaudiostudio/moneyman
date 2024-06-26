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
  const isWelcomePage = location.pathname === '/welcome';

  return (
    <>
      {!isLoginPage && !isSignupPage && !isWelcomePage && <Navbar />}
      {children}
      {!isLoginPage && !isSignupPage && !isWelcomePage&& (
        <>
          <Port />
          <BasicTable />
        </>
      )}
    </>
  );
}

export default ConditionalWrapper;
