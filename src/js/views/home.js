import React, { useState } from "react";
import { singIn } from "../utilities/signIn";
import { useHistory } from "react-router-dom";
import { Images } from "../component/Images";

export const Home = () => {
	return (
		<div className="container">
			<Images />
		</div>
	);
};
