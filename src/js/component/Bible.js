import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Bible = () => {
	const [verseRef, setVerseRef] = useState("");
	const [verse, setVerse] = useState("");
	const API_KEY = "f0c3f22e7fe62e154590fb25c584f048"; // Fill in with your own key.
	// const verse = document.querySelector(`#verse-content`);
	// const verseRef = document.querySelector(`#verse`);

	const BIBLE_ID = `06125adad2d5898a-01`;

	const VERSES = [
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
	];
	useEffect(() => {
		/**
		 * EDIT THIS!
		 * This function is the equivalent to "window.onLoad", it only run once on the entire application lifetime
		 * you should do your ajax requests or fetch api requests here
		 *
		 * state.loadSomeData(); <---- calling this function from the flux.js actions
		 *
		 **/
		getResults(verseID).then(data => {
			const passage = data.passages[0];
			let aux;
			let script = "";
			for (let i = 0; i < passage.content.length; i++) {
				if (passage.content[i] === "<") {
					aux = true;
				}
				if (!aux) {
					script = script + passage.content[i];
				}
				if (passage.content[i] === ">") {
					aux = false;
					script = script + " ";
				}
			}

			setVerseRef(passage.reference);
			setVerse(script);
			// verseRef.innerHTML = `<span><i>${passage.reference}</i></span>`;
			// verse.innerHTML = <div className="text eb-container">${passage.content}</div>;
		});
	}, []);
	const verseIndex = Math.floor(Math.random() * VERSES.length);
	const verseID = VERSES[verseIndex];

	//const verseIndex = new Date().getDate();

	function getResults(verseID) {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.withCredentials = false;

			xhr.addEventListener(`readystatechange`, function() {
				if (this.readyState === this.DONE) {
					const { data, meta } = JSON.parse(this.responseText);

					// _BAPI.t(meta.fumsId);
					resolve(data);
				}
			});

			xhr.open(`GET`, `https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/search?query=${verseID}`);
			xhr.setRequestHeader(`api-key`, API_KEY);

			xhr.onerror = () => reject(xhr.statusText);

			xhr.send();
		});
	}
	return (
		<div className="container">
			<div className="row ">
				<div className="col-12 bg-light">
					<h2>Verse of the Day:</h2>
					<h3 id="viewing">
						<i>{verseRef}</i>
					</h3>
				</div>
				<div className="col-12">{verse}</div>
			</div>
		</div>
	);
};
