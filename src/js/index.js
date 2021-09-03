//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/auth";
//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";

// firebase
const firebaseConfig = {
	apiKey: "AIzaSyC8KvBrvh0bYpwytHKEdD08eJ0tnPCUWko",
	authDomain: "ocean-life-church.firebaseapp.com",
	projectId: "ocean-life-church",
	storageBucket: "ocean-life-church.appspot.com",
	messagingSenderId: "977293261723",
	appId: "1:977293261723:web:cec9886ea3b0e5879a3f3e",
	measurementId: "G-6R9MD78K4K"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth();
//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
