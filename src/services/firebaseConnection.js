import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: 'AIzaSyDEDXSQbB2I5TQEKhJqBCMv1KVGOnAFZNI',
  authDomain: 'pokedex-971bb.firebaseapp.com',
  databaseURL: 'https://pokedex-971bb-default-rtdb.firebaseio.com',
  projectId: 'pokedex-971bb',
  storageBucket: 'pokedex-971bb.appspot.com',
  messagingSenderId: '244360417356',
  appId: '1:244360417356:web:03143efb2b28ef2e02a4e9',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
