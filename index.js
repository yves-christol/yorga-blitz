import React, { Component, useState } from 'react';
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

const Counter = () => {
  const [countLocal, setCountLocal] = useState(0);
  const [count, setCount] = useGlobalState('count');
  return (
    <div>
      <span>Counter: {countLocal} global {count}</span>
      {/* update state by passing callback function */}
      <button onClick={() => {setCountLocal(countLocal + 1); setCount(v => v + 1)}}>+1</button>
      {/* update state by passing new value */}
      <button onClick={() => {setCountLocal(countLocal-1); setCount(count - 1)}}>-1</button>
    </div>
  );
};

render( 
  <div>
    <App name='you'/>
    <Counter />
    <Counter />
  </div>,
  document.getElementById('root')
);
