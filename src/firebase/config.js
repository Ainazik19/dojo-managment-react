import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCzAewGOspd8UkCW73_E6dS3bo-MZc43us",
    authDomain: "thedojo-d9973.firebaseapp.com",
    projectId: "thedojo-d9973",
    storageBucket: "thedojo-d9973.appspot.com",
    messagingSenderId: "180929493579",
    appId: "1:180929493579:web:7e758cf4f2a362ee4cabce"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  //timestamp
  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, projectStorage, timestamp }