import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { singOut } from "../utilities/signOut";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	let history = useHistory();
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			{localStorage.getItem("userName") === null ? (
				<Link to="/">
					<span className="navbar-brand mb-0 h1 w-50">
						<img
							src="https://i.ibb.co/0BQTqdy/Ocean-Life-Church-LOGO.png"
							alt="Ocean-Life-Church-LOGO"
							border="0"
						/>
					</span>
				</Link>
			) : (
				<Link to="/welcome">
					<span className="navbar-brand mb-0 h1 w-50">
						<img
							src="https://i.ibb.co/0BQTqdy/Ocean-Life-Church-LOGO.png"
							alt="Ocean-Life-Church-LOGO"
							border="0"
						/>
					</span>
				</Link>
			)}
			<div className="ml-auto">
				{localStorage.getItem("userName") === null ? (
					<>
						<button className="btn btn-primary mr-1" onClick={() => history.push("/login")}>
							Sign In
						</button>
						<button className="btn btn-dark" onClick={() => history.push("/registration")}>
							Register
						</button>
					</>
				) : localStorage.getItem("userId") === "SZfz2sPscpVnQXanLFpESlnbgQi2" ? (
					<nav className="nav justify-content-end">
						<button className="nav-link btn btn-primary mr-2">Active</button>
						<div className="dropdown">
							<button
								className="btn btn-secondary dropdown-toggle"
								type="button"
								id="dropdownMenuButton"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Welcome {localStorage.getItem("userName")}
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
					</nav>
				) : (
					<div className="dropdown">
						<button
							className="btn btn-secondary dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Welcome {localStorage.getItem("userName")}
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
