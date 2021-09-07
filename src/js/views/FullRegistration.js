import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const FullRegistration = () => {
	const { actions } = useContext(Context);
	const [userName, setUserName] = useState("");
	const [userLastName, setUserLastName] = useState("");
	const [userAddress, setUserAddress] = useState("");
	const [userAddress2, setUserAddress2] = useState("");
	const [userPhone, setUserPhone] = useState("");
	const [userCity, setUserCity] = useState("");
	const [userState, setUserState] = useState("");
	const [userZip, setUserZip] = useState("");

	let history = useHistory();

	return (
		<span>
			<div className="row justify-content-center bg-dark">
				<div className="col-8 mt-3 p-3">
					<form
						className="text-white rounded"
						onSubmit={e => {
							e.preventDefault();
							actions.userFullRegistration(
								userName,
								userLastName,
								userPhone,
								userAddress,
								userAddress2,
								userCity,
								userState,
								userZip
							);
							history.push("/welcome");
						}}>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="inputName4">Name</label>
								<input
									type="text"
									className="form-control"
									id="inputName4"
									onChange={e => setUserName(e.target.value)}
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputLastName4">Last Name</label>
								<input
									type="text"
									className="form-control"
									id="inputLastName4"
									onChange={e => setUserLastName(e.target.value)}
								/>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="inputAddress">Address</label>
							<input
								type="text"
								className="form-control"
								id="inputAddress"
								placeholder="301 Biscayne Blvd"
								onChange={e => setUserAddress(e.target.value)}
							/>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="inputAddress2">Address 2</label>
								<input
									type="text"
									className="form-control"
									id="inputAddress2"
									placeholder="Apartment, studio, or floor"
									onChange={e => setUserAddress2(e.target.value)}
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputPhone">Phone</label>
								<input
									type="text"
									className="form-control"
									id="inputPhone"
									placeholder="(000)000-00000"
									onChange={e => setUserPhone(e.target.value)}
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="inputCity">City</label>
								<input
									type="text"
									className="form-control"
									id="inputCity"
									onChange={e => setUserCity(e.target.value)}
								/>
							</div>
							<div className="form-group col-md-4">
								<label htmlFor="inputState">State</label>
								<input
									type="text"
									className="form-control"
									id="inputState"
									onChange={e => setUserState(e.target.value)}
								/>
							</div>
							<div className="form-group col-md-2">
								<label htmlFor="inputZip">Zip</label>
								<input
									type="text"
									className="form-control"
									id="inputZip"
									onChange={e => setUserZip(e.target.value)}
								/>
							</div>
						</div>
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
				</div>
			</div>
		</span>
	);
};
