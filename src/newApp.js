import React from 'react';
import { SignUp, SignIn } from './Auth';

const App = () => {
  return (
    <>
      <h1>Sign Up</h1>
      <SignUp />
      <h1>Sign In</h1>
      <SignIn />
    </>
  );
};

export default App;