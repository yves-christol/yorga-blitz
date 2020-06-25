import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/App';
import BaseContext from './base/Base';

render( 
  <div>
    <BaseContext.Provider >
      <App name='you'/>
    </BaseContext.Provider>
  </div>,
  document.getElementById('root')
);
