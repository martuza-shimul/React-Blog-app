import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD9VPbuowPNI7-2sORBGDb3KPNThrYC0Z0",
  authDomain: "project-management-mart.firebaseapp.com",
  databaseURL: "https://project-management-mart.firebaseio.com",
  projectId: "project-management-mart",
  storageBucket: "project-management-mart.appspot.com",
  messagingSenderId: "632258011622",
  appId: "1:632258011622:web:6b1dbbd6116978d34a7627",
  measurementId: "G-P483755FXX"
};
// Initialize Firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// export const firestore = firebaseApp.firestore()
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
// firebase.analytics();

export default firebase;
