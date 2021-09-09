import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Card = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="row m-2 ">
			{store.classes.map(classes => {
				return (
					<div className="card col-md-4" style={{ width: "10rem" }} key={classes.title}>
						<img className="card-img-top" src={classes.image} alt="Dog image" style={{ height: "10rem" }} />
						<div className="card-body">
							<h5 className="card-title">{classes.title}</h5>
							<p className="card-text">{classes.description}</p>
						</div>
						<hr className="m-0" />
						<div className="text-center m-2">
							<a className="btn btn-primary text-white">Register</a>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Card;
