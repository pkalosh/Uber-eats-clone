// import firebase from 'firebase/compat/app';

// import 'firebase/compat/firestore';


import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDquk1ryqEMPtXLuPCAQ9ZyLu68ZjSGg1k",
  authDomain: "uber-eats-clone-e8c89.firebaseapp.com",
  projectId: "uber-eats-clone-e8c89",
  storageBucket: "uber-eats-clone-e8c89.appspot.com",
  messagingSenderId: "784569616052",
  appId: "1:784569616052:web:8e2a36529183f588c439e1"
};


!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase; 

// const app = initializeApp(firebaseConfig);
