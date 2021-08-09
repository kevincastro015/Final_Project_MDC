import React, { useState } from "react";
import { singIn } from "../utilities/signIn";
import { useHistory } from "react-router-dom";

export const Home = () => {
	return (
		<div className="container">
			<div className="card">
				<div className="row text-over-image">
					<div className="col-6 image">
						<img src="https://i.ibb.co/t34tCR9/People-Worshipping-Small.jpg" />
					</div>

					<div className="col-6 text text-center text-white h1 h-100 align-self-center">
						Our mission is
						<span className="highlight-text"> simple,</span> to bring those who are far from God close to
						him.
					</div>
				</div>
			</div>

			{/* <div id="missionBackground" className="bg-dark text-light">
				<img
					src="https://i.ibb.co/t34tCR9/People-Worshipping-Small.jpg"
					alt="People-Worshipping-Small"
					border="0"
				/>
				<p className="carousel-caption">
					Our mission is
					<span className="highlight-text"> simple,</span> to bring those who are far from God close to him.
				</p>
			</div> */}
		</div>
	);
};
