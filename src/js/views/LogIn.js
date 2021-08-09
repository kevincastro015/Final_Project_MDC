import React, { useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { singIn } from "../utilities/signIn";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const LogIn = () => {
	const { actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	let history = useHistory();

	const onsignInClicked = async (email, password) => {
		try {
			await singIn(email, password).then(userCredential => {
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
		<div className="container ">
			<div className="row justify-content-center">
				<div className="col-4 mt-3 p-3">
					<form>
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Email address</label>
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1">Password</label>
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
						<button
							type="submit"
							className="btn btn-primary"
							onClick={e => {
								onsignInClicked(email, password);
								e.preventDefault();
							}}>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

// <span>
// 	<div className="sidenav">
// 		<div className="login-main-text">
// 			<h2>
// 				Application
// 				<br /> Login Page
// 			</h2>
// 			<p>Login or register from here to access.</p>
// 		</div>
// 	</div>
// 	<div className="main">
// 		<div className="col-md-6 col-sm-12">
// 			<div className="login-form">
// 				<form>
// 					<div className="form-group">
// 						<label>Email</label>
// 						<input
// 							type="text"
// 							className="form-control"
// 							placeholder="Email"
// 							onChange={e => setEmail(e.target.value)}
// 						/>
// 					</div>
// 					<div className="form-group">
// 						<label>Password</label>
// 						<input
// 							type="password"
// 							className="form-control"
// 							placeholder="Password"
// 							onChange={e => setPassword(e.target.value)}
// 						/>
// 					</div>
// 					<button
// 						type="submit"
// 						className="btn btn-black"
// 						onClick={e => {
// 							onsignInClicked(email, password);
// 							e.preventDefault();
// 						}}>
// 						Login
// 					</button>
// 				</form>
// 			</div>
// 		</div>
// 	</div>
// </span>
