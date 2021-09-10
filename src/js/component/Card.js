import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const Card = () => {
	const { store, actions } = useContext(Context);
	const [registered, setRegistered] = useState(false);
	return (
		<div className="row m-2 ">
			{store.classes.map((classes, index) => {
				return (
					<div className="card col-md-4" style={{ width: "10rem" }} key={index}>
						<img className="card-img-top" src={classes.image} alt="Dog image" style={{ height: "10rem" }} />
						<div className="card-body">
							<h5 className="card-title">{classes.title}</h5>
							<p className="card-text">{classes.description}</p>
						</div>
						<hr className="m-0" />
						<div className="text-center m-2">
							{registered ? (
								<button className="btn btn-primary text-white" disabled="true">
									Register
								</button>
							) : (
								<button
									className="btn btn-primary text-white"
									onClick={() => {
										actions.classRegistered(localStorage.getItem("userId"), index);
										setRegistered(true);
									}}>
									Register
								</button>
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Card;
