import firebase from "firebase/app";
import "firebase/firestore";
import firebaseCongif from "./firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseCongif);
const firestore = firebaseApp.firestore();
const settings = {
  timestampsInSnapshots: true
};

firestore.settings(settings);

export default firestore;
