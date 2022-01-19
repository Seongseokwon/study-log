import React, { useState } from 'react';
import './App.scss';
import Header from './components/header/Header';
import LoginAndSignup from './components/loginAndSignup/LoginAndSignup';

function App() {

  const [loginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <div className='app-container'>
      <div className='container'>
        <Header loginModalOpen={setLoginModalOpen} />



      </div>

      {loginModalOpen && <LoginAndSignup isOpen={loginModalOpen} loginModalClose={setLoginModalOpen}/>}


    </div>
  );
}

export default App;
