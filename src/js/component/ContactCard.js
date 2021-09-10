import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";
import { Context } from "../store/appContext";
import { ModalVideo } from "../component/Modal";
import ReactPlayer from "react-player";
import YouTubePlayer from "react-player/youtube";

export const ContactCard = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({});
	let history = useHistory();

	return (
		<>
			{store.recordedClasses.map((recordedClasses, i) => {
				return (
					<li className="list-group-item" key={i}>
						<div className="row w-100">
							<div className="col-12 col-sm-6 col-md-3 px-0">
								<img
									src={recordedClasses.image}
									alt="Mike Anamendolla"
									className="rounded-circle mx-auto d-block img-fluid"
								/>
							</div>
							<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
								<label className="name lead">
									<a href={recordedClasses.link}>{recordedClasses.title}</a>
								</label>
								<br />
								<p>Description:</p>
								<span className="text-muted">{recordedClasses.description}</span>
								<button
									onClick={() => {
										setState({ showModal: true });
									}}>
									Watch
								</button>
								<ModalVideo
									show={state.showModal}
									onClose={() => setState({ showModal: false })}
									videoLink={recordedClasses.link}
								/>
							</div>
						</div>
					</li>
				);
			})}
		</>
	);
};
