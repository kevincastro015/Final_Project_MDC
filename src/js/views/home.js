import React, { useState } from "react";
import { singIn } from "../utilities/signIn";
import { useHistory } from "react-router-dom";

export const Home = () => {
	return (
		<div className="container">
			<div id="missionBackground" className="bg-dark text-light">
				<img
					src="https://coral-planarian-iv0ltgzy.ws-us13.gitpod.io/files/download/?id=8e53b9b1-bf80-4dfb-bade-83da07d1787e"
					className="img-responsive"
				/>
				<h3 className="carousel-caption">
					Our mission is
					<span className="highlight-text"> simple,</span> to bring those who are far from God close to him.
				</h3>
				<div className="absolute bg-transparent h-full w-full" />
			</div>
		</div>
	);
};
