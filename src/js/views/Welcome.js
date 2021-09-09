import React, { useState } from "react";
import Card from "../component/Card";
import { Modal } from "../component/Modal";

export const Welcome = () => {
	const [state, setState] = useState({
		//initialize state here
	});
	return (
		<div className="container">
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
			<div className="container-fluid">
				<div className="row justify-content-center">
					<nav className="nav nav-pills justify-content-center">
						<div className="nav nav-tabs" id="nav-tab" role="tablist">
							{/* <a className="nav-link" data-toggle="pill" href="#home">
								<i className="fas fa-th-large" />
							</a> */}
							<a
								className="nav-link active"
								id="nav-home-tab"
								data-toggle="tab"
								href="#home"
								role="tab"
								aria-controls="nav-home"
								aria-selected="true">
								<i className="fas fa-th-large" />
							</a>
							{/* <a className="nav-link" data-toggle="pill" href="#menu1">
								<i className="fas fa-bars" />
							</a> */}
							<a
								className="nav-link"
								id="nav-profile-tab"
								data-toggle="tab"
								href="#menu1"
								role="tab"
								aria-controls="nav-profile"
								aria-selected="false">
								<i className="fas fa-bars" />
							</a>
						</div>
					</nav>
				</div>
				{/* Card page */}
				<div className="tab-content" id="nav-tabContent">
					<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="nav-home-tab">
						<Card />
					</div>

					{/* <div className="tab-pane container active" id="home">
						<Card />
					</div> */}

					<div className="tab-pane fade" id="menu1" role="tabpanel" aria-labelledby="nav-profile-tab">
						<h1>Other Page</h1>
					</div>
					{/* <div className="tab-pane container fade" id="menu1">
						Other Page
					</div> */}
				</div>
			</div>
		</div>
	);
};
