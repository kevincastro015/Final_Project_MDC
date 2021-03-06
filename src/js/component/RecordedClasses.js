import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";
import { Context } from "../store/appContext";
import { ModalVideo } from "./Modal";
import ReactPlayer from "react-player";
import YouTubePlayer from "react-player/youtube";

export const RecordedClasses = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({});
	const [videoLink, setVideoLink] = useState("");
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
									className="mx-auto d-block img-fluid"
								/>
							</div>
							<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
								<label className="name lead">{recordedClasses.title}</label>
								<br />
								<p>Description:</p>
								<span className="text-muted">{recordedClasses.description}</span>
								<br />
								<button
									onClick={() => {
										setState({ showModal: true });
										setVideoLink(recordedClasses.link);
									}}>
									Watch
								</button>
								<ModalVideo
									show={state.showModal}
									onClose={() => setState({ showModal: false })}
									videoLink={videoLink}
								/>
								{console.log(recordedClasses.link)}
							</div>
						</div>
					</li>
				);
			})}
		</>
	);
};
