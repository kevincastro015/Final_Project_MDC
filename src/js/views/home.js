import React, { useState } from "react";
import { singIn } from "../utilities/signIn";
import { useHistory } from "react-router-dom";
import { PageImages } from "../component/PageImages";
import { Carousel } from "../component/Carousel";

export const Home = () => {
	const images = [
		"https://i.ibb.co/t34tCR9/People-Worshipping-Small.jpg",
		"https://i.ibb.co/wW8vVC8/Praise-And-Prayer.jpg",
		"https://i.ibb.co/G7wYMWV/Volunteering.jpg"
	];
	return (
		<div className="container">
			<Carousel image={images} />
			{/* <PageImages
				img="https://i.ibb.co/t34tCR9/People-Worshipping-Small.jpg"
				description="Our mission is simple, to bring those who are far from God close to him."
			/>
			<PageImages
				img="https://i.ibb.co/wW8vVC8/Praise-And-Prayer.jpg"
				description="Prayer is our first reponse not our last resort."
			/>
			<PageImages img="https://i.ibb.co/G7wYMWV/Volunteering.jpg" description="Excellence Is Our Spirit" /> */}
		</div>
	);
};
