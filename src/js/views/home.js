import React from "react";
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
		</div>
	);
};
