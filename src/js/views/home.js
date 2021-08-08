import React, { useState } from "react";
import { singIn } from "../utilities/signIn";
import { useHistory } from "react-router-dom";

export const Home = () => {
	return (
		<div id="homeBackground" className="bg-dark text-light">
			<h2>
				Our mission is
				<span className="highlight-text"> simple,</span> to bring those who are far from God close to him.
			</h2>
		</div>
	);
};
