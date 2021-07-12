// Firebase App (the core Firebase SDK) is always required and must be listed first

import firebase from 'firebase';

import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// // Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
export const firebaseConfig = {
  apiKey: "AIzaSyA56mq2gnCeuYkuYE7hxhC4iIezVTKwRtM",
  authDomain: "myfirstreactnativeapp-68378.firebaseapp.com",
  projectId: "myfirstreactnativeapp-68378",
  storageBucket: "myfirstreactnativeapp-68378.appspot.com",
  messagingSenderId: "812095158650",
  appId: "1:812095158650:web:78a54aa8407142b9597ec3",
  measurementId: "G-VEE3NW2KHC"
};
// // Initialize Firebase
// firebase.analytics();

export const firebase_app = firebase.initializeApp(firebaseConfig);






{/* <script src="/__/firebase/8.7.1/firebase-app.js"></script>

<script src="/__/firebase/8.7.1/firebase-analytics.js"></script>

<script src="/__/firebase/init.js"></script> */}