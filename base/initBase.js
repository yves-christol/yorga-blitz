import * as app  from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';
import {setAuth, setBase} from '../globalState';


const initBase = () => {
  if (!app.apps.length) { // to avoid multiple calls on hot reload
    console.log('Init base for '+firebaseConfig.projectId);
    app.initializeApp(firebaseConfig);
    setAuth(app.auth());
    setBase(app.firestore());
  } else {
    console.log('Base already initialized');
  }
}

export default initBase;

