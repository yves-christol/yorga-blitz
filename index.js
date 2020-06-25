import React, { Component } from 'react';
import { render } from 'react-dom';
import { createGlobalState } from 'react-hooks-global-state';
import initBase from './base/initBase';
import App from './components/App';
 
const { useGlobalState, getGlobalState, setGlobalState } = createGlobalState({ base: null, auth: null, theme: 'dark' });

initBase(setGlobalState);

render( 
  <div>
    <App name='you'/>
  </div>,
  document.getElementById('root')
);
