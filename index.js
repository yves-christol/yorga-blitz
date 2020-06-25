import React, { Component } from 'react';
import { render } from 'react-dom';
import { createGlobalState } from 'react-hooks-global-state';
import initBase from './base/initBase';
import App from './components/App';
 
const { useGlobalState, getGlobalState, setGlobalState } = createGlobalState({ base: null, auth: null, count: 0, theme: 'dark' });
console.log('Toto '+getGlobalState('theme'));
console.log('Tutu '+getGlobalState('count'));

initBase(setGlobalState);

console.log('Tutu2 '+getGlobalState('count'));
console.log('Toto '+getGlobalState('base'));
setTimeout(() => { console.log('Toto '+getGlobalState('base')) }, 5000);

render( 
  <div>
    <App name='you'/>
  </div>,
  document.getElementById('root')
);
