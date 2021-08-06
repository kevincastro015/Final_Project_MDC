import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import { register } from "../utilities/register";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Registration = () => {
	const { actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmation, setConfirmation] = useState("");
	let history = useHistory();
	let confPassword;
	if (password === confirmation) {
		confPassword = true;
	} else {
		confPassword = false;
	}
	const onsignInClicked = async (email, password) => {
		try {
			await register(email, password).then(userCredential => {
				let getEmail = userCredential.user.email;
				let position = getEmail.indexOf("@");
				let username = getEmail.slice(0, position);
				actions.userLoggedIn(username);
			});
			history.push("/welcome");
		} catch (e) {
			alert(e.message);
		}
	};

	return (
		<span>
			<div className="sidenav">
				<div className="login-main-text">
					<h2>
						Application
						<br /> Login Page
					</h2>
					<p>Login or register from here to access.</p>
				</div>
			</div>
			<div className="main">
				<div className="col-md-6 col-sm-12">
					<div className="login-form">
						<form>
							<div className="form-group">
								<label>Email</label>
								<input
									type="text"
									className="form-control"
									placeholder="Email"
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label>Password</label>
								<input
									type="password"
									className="form-control"
									placeholder="Password"
									onChange={e => setPassword(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label>Confirm your Password</label>
								<input
									type="password"
									className="form-control"
									placeholder="Password"
									onChange={e => setConfirmation(e.target.value)}
									style={!confPassword ? { borderColor: "red" } : { borderColor: "gray" }}
								/>
							</div>
							<button
								type="submit"
								className="btn btn-secondary"
								disabled={!confPassword}
								onClick={e => {
									onsignInClicked(email, password);
									e.preventDefault();
								}}>
								Register
							</button>
						</form>
					</div>
				</div>
			</div>
		</span>
	);
};
