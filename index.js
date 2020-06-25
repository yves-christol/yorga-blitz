import './style.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Base, { BaseContext } from './base';


render(
  <BaseContext.Provider value={new Base()}>
    <App name='you'/>
  </BaseContext.Provider>,
  document.getElementById('root')
);
