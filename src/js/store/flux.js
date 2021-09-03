import firebase from "firebase";

const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			user: "",
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
			classes: [
				{
					title: "Financial Peace University",
					description:
						"Financial Peace University is the proven plan that helps you pay off debt fast and save more money for your future.  Financial Peace University is a nine-lesson course that teaches you how to save for emergencies, pay off debt fast, spend wisely, and invest for your future. And no financial blah blah blah over here. For over 25 years, Dave Ramsey’s been teaching commonsense, biblical money principles that work. Every time.",
					image: "https://i.ibb.co/0qd9bjR/Financial-Peace-University.png"
				},
				{
					title: "SYMBIS",
					description:
						"Saving Your Marriage Before It Starts is a six-week relationship course covering conflict resolution; sex and intimacy; finances; spiritual unity; husband/wife roles, and more.",
					image: "https://i.ibb.co/LnYKqRR/pexels-caio-56926.jpg"
				},
				{
					title: "ALPHA",
					description:
						"The Alpha course is an evangelistic course which seeks to introduce the basics of the Christian faith through a series of talks and discussions. As a follower of Jesus, we want you to be resourced to answer tough questions about your faith as well as guide others to know more about the 'why' behind our beliefs.",
					image: "https://i.ibb.co/ZcR4L3Z/ALPHAcourse.jpg"
				},
				{
					title: "The Bible Study",
					description:
						"The Bible Study is a introductory guide through the entire bible. Over the course of a year (separated into 3 seasons), you will dive deeper into scripture, gather historical context and gain a better understanding of what you are reading and how it relates to you as you build a life of richer faith and closeness to God.",
					image: "https://i.ibb.co/TKLQNqV/The-Bible-Study.jpg"
				}
			]
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			userLoggedIn: userName => {
				localStorage.setItem("user", userName);
				const userN = localStorage.getItem("user");
				setStore({ user: userN });
			},
			userLoggedOut: () => {
				localStorage.clear();
				setStore({ user: "" });
			},
			userFullRegistration: (uName, uLastName, uPhone, uAddress, uAddress2, uCity, uState, uZip) => {
				console.log([uName, uLastName, uPhone, uAddress, uAddress2, uCity, uState, uZip]);
				firebase
					.firestore()
					.collections("users")
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
					.catch(e => console.log(e));
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
			}
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
