import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Bible = () => {
	const { store, actions } = useContext(Context);
	const [verseRef, setVerseRef] = useState("");
	const [verse, setVerse] = useState("");
	useEffect(() => {
		/**
		 * EDIT THIS!
		 * This function is the equivalent to "window.onLoad", it only run once on the entire application lifetime
		 * you should do your ajax requests or fetch api requests here
		 *
		 * state.loadSomeData(); <---- calling this function from the flux.js actions
		 *
		 **/
		actions.getVerse(verseID).then(data => {
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
		});
	}, []);
	const verseIndex = Math.floor(Math.random() * store.verses.length);
	const verseID = store.verses[verseIndex];

	return (
		<div className="container">
			<div className="row bg-dark text-light">
				<div className="col-12">
					<h2>Verse of the Day:</h2>
					<h3 id="viewing">
						<i>{verseRef}</i>
					</h3>
				</div>
				<div className="col-12 bg-dark text-light">{verse}</div>
			</div>
		</div>
	);
};
