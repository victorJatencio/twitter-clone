import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCi2LqZoebhPi7w8awB3Au9JEQJUMIpSh4",
  authDomain: "twitter-clone-1a7ec.firebaseapp.com",
  databaseURL: "https://twitter-clone-1a7ec.firebaseio.com",
  projectId: "twitter-clone-1a7ec",
  storageBucket: "twitter-clone-1a7ec.appspot.com",
  messagingSenderId: "59370367455",
  appId: "1:59370367455:web:91dc4c34b5129ba9157c6a",
  measurementId: "G-M3Z99KHV0G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
