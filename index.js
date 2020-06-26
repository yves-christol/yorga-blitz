import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import initBase from './base/initBase';
import App from './components/App';
 
initBase();

render( 
  <div>
    <App />
  </div>,
  document.getElementById('root')
);
