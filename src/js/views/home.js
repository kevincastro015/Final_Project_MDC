import React, { useState } from "react";
import { singIn } from "../utilities/signIn";
import { useHistory } from "react-router-dom";

export const Home = () => {
	return (
		<div className="container">
			<div id="missionBackground" className="bg-dark text-light">
				<img
					src="https://i.ibb.co/t34tCR9/People-Worshipping-Small.jpg"
					alt="People-Worshipping-Small"
					border="0"
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
