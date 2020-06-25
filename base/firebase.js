import * as firebase from 'firebase';
import './firebaseConfig'

// ES6 modules are singletons with an instance being created for each file at the beginning of the runtime, therefore initialiseApp will only be invoked once
firebase.initializeApp(firebaseConfig);

export default firebase;