import React, { useState } from "react";
import { singIn } from "../utilities/signIn";
import { useHistory } from "react-router-dom";
import { Bible } from "../component/Bible";
import { PageImages } from "../component/PageImages";

export const Welcome = () => {
	return (
		<div className="container">
			<Bible />,<PageImages img="https://i.ibb.co/KGbYk6L/Jesus-Is-Alive.jpg" />,
			<PageImages img="https://i.ibb.co/tpVb5F8/Come-As-You-Are.jpg" description="" />,
			<PageImages img="https://i.ibb.co/vw57n95/Digitial-Cross.jpg" description="Genorosity is our priviledge." />
			,<PageImages img="https://i.ibb.co/DkpJyfB/JESUS.jpg" description="is our message." />
		</div>
	);
};
