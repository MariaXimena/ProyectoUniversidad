import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBmz1wQIcTA6Zi695sHlAOYTlu7ViqfZxg",
  authDomain: "android-python-8509e.firebaseapp.com",
  databaseURL: "https://android-python-8509e-default-rtdb.firebaseio.com",
  projectId: "android-python-8509e",
  storageBucket: "android-python-8509e.appspot.com",
  messagingSenderId: "47292276634",
  appId: "1:47292276634:web:617cce9b3092dd04026423"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default {
  firebaseConfig,
  db,
};