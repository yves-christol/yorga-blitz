import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import { createGlobalState } from 'react-hooks-global-state';
import initBase from './base/initBase';
import App from './components/App';
 
const { useGlobalState, getGlobalState, setGlobalState } = createGlobalState({ base: null, auth: null, count: 0, theme: 'dark' });

initBase(setGlobalState);

console.log('Base '+getGlobalState('base'));

render( 
  <div>
    <App name='you'/>
  </div>,
  document.getElementById('root')
);
