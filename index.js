import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import initBase from './base/initBase';
import App from './components/App';
 
initBase();

render( 
  <div>
    <h1>Firebase utils</h1>
    <App />
  </div>,
  document.getElementById('root')
);
