import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { singOut } from "../utilities/signOut";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	let history = useHistory();
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src="https://browser-coral-planarian-iv0ltgzy.ws-us13.gitpod.io/workspace/Final_Project_MDC_4Geeks/src/img/OCL%20-%20Logo.png" />
				</span>
			</Link>
			<div className="ml-auto">
				{store.user === "" ? (
					<>
						<button className="btn btn-primary mr-1" onClick={() => history.push("/login")}>
							Sign In
						</button>
						<button className="btn btn-dark" onClick={() => history.push("/registration")}>
							Register
						</button>
					</>
				) : (
					<div className="dropdown">
						<button
							className="btn btn-secondary dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Welcome {store.user}
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<a
								className="dropdown-item"
								href="#"
								onClick={() => {
									singOut();
									actions.userLoggedOut();
									history.push("/");
								}}>
								Sign out
							</a>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};
