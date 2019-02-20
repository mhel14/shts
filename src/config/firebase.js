import firebase from 'firebase';

const settings = {timestampsInSnapshots: true};
// Initialize Firebase
const config = {
  apiKey: "AIzaSyDM9gzqGUGCmHoy4z7UgTRMRjvdEGCty30",
  authDomain: "shts-9c826.firebaseapp.com",
  databaseURL: "https://shts-9c826.firebaseio.com",
  projectId: "shts-9c826",
  storageBucket: "shts-9c826.appspot.com",
  messagingSenderId: "574618075144"
};
const firebaseInit = firebase.initializeApp(config);
firebase.firestore().settings(settings);
export default firebaseInit;