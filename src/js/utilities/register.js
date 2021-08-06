// Declare a function to signIn
import firebase from "firebase/app";

export const register = (email, password) => {
	return firebase.auth().createUserWithEmailAndPassword(email, password);
};
