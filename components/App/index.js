import React from 'react';
import { useGlobalState } from '../../globalState';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import '../../style.css';

const App =  ({name}) => {
  const [auth, _] = useGlobalState("auth");
  return (
    <div>
      <CssBaseline />
      <h1>Hello {auth ? auth.currentUser : 'pas de base'}!</h1>
      <p>
        Let`s replace hierarchy with something smarter
      </p>
    </div>
  );
}

export default App;
