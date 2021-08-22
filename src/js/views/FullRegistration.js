import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import { register } from "../utilities/register";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const FullRegistration = () => {
	const { actions } = useContext(Context);
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [address, setAddress] = useState("");
	const [address2, setAddress2] = useState("");
	const [phone, setPhone] = useState("");
	const [city, setCity] = useState("");

	let history = useHistory();

	return (
		<span>
			<div className="row justify-content-center bg-dark">
				<div className="col-8 mt-3 p-3">
					<form className="text-white rounded">
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="inputName4">Name</label>
								<input type="text" className="form-control" id="inputName4" />
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputLastName4">Last Name</label>
								<input type="text" className="form-control" id="inputLastName4" />
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="inputAddress">Address</label>
							<input
								type="text"
								className="form-control"
								id="inputAddress"
								placeholder="301 Biscayne Blvd"
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
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputPhone">Phone</label>
								<input
									type="text"
									className="form-control"
									id="inputPhone"
									placeholder="(000)000-00000"
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="inputCity">City</label>
								<input type="text" className="form-control" id="inputCity" />
							</div>
							<div className="form-group col-md-4">
								<label htmlFor="inputState">State</label>
								<select id="inputState" className="form-control">
									<option selected>FL</option>
									<option>AK</option>
									<option>AL</option>
									<option>AR</option>
									<option>AZ</option>
									<option>CA</option>
									<option>CO</option>
									<option>CT</option>
									<option>DE</option>
									<option>GA</option>
									<option>HI</option>
									<option>IA</option>
									<option>ID</option>
									<option>IL</option>
									<option>IN</option>
									<option>KS</option>
									<option>KY</option>
									<option>LA</option>
									<option>MA</option>
									<option>MD</option>
									<option>ME</option>
									<option>MI</option>
									<option>MN</option>
									<option>MO</option>
									<option>MS</option>
									<option>MT</option>
									<option>NC</option>
									<option>ND</option>
									<option>NE</option>
									<option>NH</option>
									<option>NJ</option>
									<option>NM</option>
									<option>NV</option>
									<option>NY</option>
									<option>OH</option>
									<option>OK</option>
									<option>OR</option>
									<option>PA</option>
									<option>RI</option>
									<option>SC</option>
									<option>SD</option>
									<option>TN</option>
									<option>TX</option>
									<option>UT</option>
									<option>VA</option>
									<option>VT</option>
									<option>WA</option>
									<option>WI</option>
									<option>WV</option>
									<option>WY</option>
								</select>
							</div>
							<div className="form-group col-md-2">
								<label htmlFor="inputZip">Zip</label>
								<input type="text" className="form-control" id="inputZip" />
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
