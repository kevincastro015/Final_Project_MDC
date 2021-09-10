import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import { Bible } from "./Bible";

export const Modal = props => {
	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header bg-dark text-light">
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close text-light"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<Bible />
				</div>
			</div>
		</div>
	);
};

export const ModalVideo = props => {
	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header bg-dark text-light" style={{ width: "640px" }}>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close text-light"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div>
						<ReactPlayer url={props.videoLink} />
					</div>
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
Modal.propTypes = {
	onClose: PropTypes.func,
	show: PropTypes.bool
};
Modal.defaultProps = {
	show: true,
	onClose: null
};
ModalVideo.propTypes = {
	onClose: PropTypes.func,
	show: PropTypes.bool,
	videoLink: PropTypes.string
};
ModalVideo.defaultProps = {
	show: false,
	onClose: null
};
/**
 * Define the default values for
 * your component's properties
 **/
