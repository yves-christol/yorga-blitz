import React from 'react';
import { useGlobalState } from '../../globalState';
import '../../style.css';

const App =  ({name}) => {
  const [auth, _] = useGlobalState("auth");
  return (
    <div>
      <h1>Hello {auth ? auth.currentUser : 'pas de base'}!</h1>
      <p>
        Let`s replace hierarchy with something smarter
      </p>
    </div>
  );
}

export default App;
