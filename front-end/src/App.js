import React, {useEffect, useState} from 'react';
import { Route } from 'react-router-dom';
import LogIn from './authentication/LogIn';
import SignUp from './authentication/SignUp';
import './App.css';

function App() {

  return (
    <div>
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
    </div>
  );
}

export default App;
