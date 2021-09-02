import React from "react";
import PropTypes from "prop-types";

import { Bible } from "./Bible";

export const Modal = props => {
	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header bg-dark text-light">
						{/* <h5 className="modal-title">Are you sure?</h5> */}
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
/**
 * Define the data-types for
 * your component's properties
 **/
Modal.propTypes = {
	onClose: PropTypes.func,
	show: PropTypes.bool
};

/**
 * Define the default values for
 * your component's properties
 **/
Modal.defaultProps = {
	show: true,
	onClose: null
};
