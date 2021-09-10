import firebase from "firebase";
import "firebase/firestore";

const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			userName: "",
			userId: "",
			verses: [
				`MAT.5.16`,
				`PSA.23`,
				`1COR.4.4-8`,
				`PHP.4.13`,
				`JHN.3.16`,
				`ROM.8.28`,
				`ISA.41.10`,
				`PSA.46.1`,
				`GAL.5.22-23`,
				`HEB.11.1`,
				`2TI.1.7`,
				`1COR.10.13`,
				`PRO.22.6`,
				`ISA.40.31`,
				`JOS.1.9`,
				`HEB.12.2`,
				`MAT.11.27`,
				`ROM.10.9-10`,
				`PHP.2.3-4`,
				`MAT.5.43-44`,
				`JHN.14.6`,
				`MAT.6.33`,
				`MAT.22.37-40`,
				`MRK.10.44-45`,
				`JHN.4.13-14`,
				`LUK.5.31-32`
			],
			classes: [],
			recordedClasses: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			userLoggedIn: () => {
				const userName = localStorage.getItem("userName");
				const userId = localStorage.getItem("userId");
				setStore({ userName: userName });
				setStore({ userId: userId });
			},
			userLoggedOut: () => {
				localStorage.clear();
				setStore({ userName: "" });
			},
			userFullRegistration: (uName, uLastName, uPhone, uAddress, uAddress2, uCity, uState, uZip) => {
				let id = localStorage.getItem("userId");
				firebase
					.firestore()
					.collection("users")
					.doc(id)
					.set({
						name: uName,
						lasName: uLastName,
						phone: uPhone,
						address: uAddress,
						address2: uAddress2,
						city: uCity,
						state: uState,
						zip: uZip
					})
					.catch(e => alert(e));
			},
			getVerse: verseID => {
				const API_KEY = "f0c3f22e7fe62e154590fb25c584f048";
				const BIBLE_ID = `06125adad2d5898a-01`;
				return new Promise((resolve, reject) => {
					const xhr = new XMLHttpRequest();
					xhr.withCredentials = false;

					xhr.addEventListener(`readystatechange`, function() {
						if (this.readyState === this.DONE) {
							const { data } = JSON.parse(this.responseText);
							resolve(data);
						}
					});

					xhr.open(`GET`, `https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/search?query=${verseID}`);
					xhr.setRequestHeader(`api-key`, API_KEY);

					xhr.onerror = () => reject(xhr.statusText);

					xhr.send();
				});
			},
			getClassesFB: async () => {
				try {
					const getClasses = firebase.firestore().collection("classes");
					const response = await getClasses.get();
					let aux = [];
					response.forEach(classes => {
						aux.push({ ...classes.data(), id: classes.id });
					});
					setStore({
						classes: aux
					});
				} catch (e) {
					alert(e);
				}
			},
			getRecordedClassesFB: async () => {
				try {
					const getRecordedClasses = firebase.firestore().collection("recordedClasses");
					const response = await getRecordedClasses.get();
					let aux = [];
					response.forEach(recordedClasses => {
						aux.push({ ...recordedClasses.data(), id: recordedClasses.id });
					});
					setStore({
						recordedClasses: aux
					});
				} catch (e) {
					alert(e);
				}
			},
			classRegistered: (userId, index) => {
				const regClass = getStore().classes[index];
				const id = regClass.id;
				let newRegister = [...regClass.registered, userId];
				// console.log("class: ", regClass);
				// console.log("classId: ", id);
				// console.log("newArray: ", newRegister);
				firebase
					.firestore()
					.collection("classes")
					.doc(id)
					.set({
						title: regClass.title,
						description: regClass.description,
						image: regClass.image,
						registered: newRegister
					})
					.catch(e => alert(e));
				getActions().getClassesFB();
			}

			// classRegisterd: (id, index) => {
			// 	setStore({ classes: [...[index].registered, id] });
			// }
			// getMap: () => {
			// 	mapboxgl.accessToken = 'pk.eyJ1IjoibWFyY2Vsb2NhbHZlcyIsImEiOiJja3M5NDJyaWcwNTZkMndwNTI5cGxoNGlwIn0.sGO0iW0yrNTyXE6jfrqyaQ';
			// 	const map = new mapboxgl.Map({
			// 		container: 'map', // container ID
			// 		style: 'mapbox://styles/mapbox/streets-v11', // style URL
			// 		center: [-74.5, 40], // starting position
			// 		zoom: 9 // starting zoom
			// 	});
			// }
		}
	};
};

export default getState;
