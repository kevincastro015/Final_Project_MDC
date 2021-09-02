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
			]
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			userLoggedIn: userName => {
				localStorage.setItem("user", userName);
				const user = localStorage.getItem("user");
				setStore({ user: user });
			},
			userLoggedOut: () => {
				localStorage.clear();
				setStore({ user: "" });
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
		}
	};
};

export default getState;
