import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA5NNixaWMWbEJ3RMen3GsYRkS0j8O6rJc",
    authDomain: "crowndb-1e9a6.firebaseapp.com",
    databaseURL: "https://crowndb-1e9a6.firebaseio.com",
    projectId: "crowndb-1e9a6",
    storageBucket: "crowndb-1e9a6.appspot.com",
    messagingSenderId: "423610263583",
    appId: "1:423610263583:web:773558005aab3282364d2a",
    measurementId: "G-VEPT3XFLL4"
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;