import React, { useState } from "react";
import Card from "../component/Card";
import { ContactCard } from "../component/ContactCard";
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
							<button
								className="nav-link active mr-1"
								id="nav-home-tab"
								data-toggle="tab"
								href="#home"
								role="tab"
								aria-controls="nav-home"
								aria-selected="true">
								Upcoming Classes
							</button>
							<button
								className="nav-link ml-1"
								id="nav-profile-tab"
								data-toggle="tab"
								href="#menu1"
								role="tab"
								aria-controls="nav-profile"
								aria-selected="false">
								Recorded Classes
							</button>
						</div>
					</nav>
				</div>
				{/* Card page */}
				<div className="tab-content" id="nav-tabContent">
					<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="nav-home-tab">
						<Card />
					</div>

					<div className="tab-pane fade" id="menu1" role="tabpanel" aria-labelledby="nav-profile-tab">
						<ContactCard />
					</div>
				</div>
			</div>
		</div>
	);
};
