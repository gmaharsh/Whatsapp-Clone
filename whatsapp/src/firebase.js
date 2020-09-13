import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDYdrLW8cFK4Y31ytkfOCbuCgNgMf_nVVQ",
  authDomain: "whatsapp-4793c.firebaseapp.com",
  databaseURL: "https://whatsapp-4793c.firebaseio.com",
  projectId: "whatsapp-4793c",
  storageBucket: "whatsapp-4793c.appspot.com",
  messagingSenderId: "639015120711",
  appId: "1:639015120711:web:0603aa478bb2e1cb83e662",
  measurementId: "G-TZ7Q6YX019",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;    