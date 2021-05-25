import React, { useState }from 'react';
import ReactDOM from 'react-dom';

import Aside from './components/Aside/index.jsx'

import './style.scss';
import LogoImg from './assets/i/Logo.png';

function App(){
  
  return(
    <div className="wrapper">
        <header>
            <img className='logo' src={LogoImg} alt="logoAviasales" />
        </header>
        
        <Aside/>
        <main>
            <section>

            </section>
            <div className="content">

            </div>
        </main>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));