import React, { useState } from "react";
import { Bible } from "../component/Bible";
import Card from "../component/Card";
import { Modal } from "../component/Modal";

export const Welcome = () => {
	const [state, setState] = useState({
		//initialize state here
	});
	return (
		<div className="container">
			{/* <Bible /> */}
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
			<Card />
		</div>
	);
};
