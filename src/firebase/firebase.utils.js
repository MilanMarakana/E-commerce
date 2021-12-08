import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyCcGt1B7Pwy7TItcOpQ24yUnv90JV_MA-4',
  authDomain: 'crown-db-c2f7a.firebaseapp.com',
  projectId: 'crown-db-c2f7a',
  storageBucket: 'crown-db-c2f7a.appspot.com',
  messagingSenderId: '255227614361',
  appId: '1:255227614361:web:f52aae3a4bed3543981408',
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
