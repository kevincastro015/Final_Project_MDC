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
				let getUserId = userCredential.user.uid;
				let position = getEmail.indexOf("@");
				let userInfo = [getEmail.slice(0, position), getUserId];
				localStorage.setItem("userName", userInfo[0]);
				localStorage.setItem("userId", userInfo[1]);
				actions.userLoggedIn(userInfo);
			});
			history.push("/fullregistration");
		} catch (e) {
			alert(e.message);
		}
	};

	return (
		<span>
			<div className="row justify-content-center bg-dark">
				<div className="col-8 mt-3 p-3">
					<form className="text-white rounded">
						<div className="form-group ml-auto col-5">
							<label htmlFor="validationDefault01">Email</label>
							<input
								type="text"
								className="form-control"
								placeholder="Email"
								required
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<div className="form-group ml-auto col-5">
							<label htmlFor="validationDefault02">Password</label>
							<input
								type="password"
								className="form-control"
								placeholder="Password"
								required
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
						<div className="form-group ml-auto col-5">
							<label htmlFor="validationDefault03">Confirm Password</label>
							<input
								type="password"
								className="form-control"
								placeholder="Confirm Password"
								required
								onChange={e => setConfirmation(e.target.value)}
								style={!confPassword ? { borderColor: "red" } : { borderColor: "gray" }}
							/>
						</div>
						<div className="ml-auto col-5">
							<button
								type="submit"
								className="btn btn-primary"
								disabled={!confPassword}
								onClick={e => {
									onsignInClicked(email, password);
									e.preventDefault();
								}}>
								Register
							</button>
						</div>
					</form>
				</div>
			</div>
		</span>
	);
};
