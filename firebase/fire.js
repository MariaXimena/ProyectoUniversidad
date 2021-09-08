import * as firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC7r8oXoReIGviorWoLqGCfYmJDPhWP2h4",
    authDomain: "skinusco-4b57a.firebaseapp.com",
    databaseURL: "https://skinusco-4b57a-default-rtdb.firebaseio.com",
    projectId: "skinusco-4b57a",
    storageBucket: "skinusco-4b57a.appspot.com",
    messagingSenderId: "735515532283",
    appId: "1:735515532283:web:8dc44051762c0881adc95e"
  };



if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}


export default firebase;