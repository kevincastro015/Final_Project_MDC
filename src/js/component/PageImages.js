import React from "react";
import PropTypes from "prop-types";

export const PageImages = props => {
	return (
		<div className="row text-over-image mt-4 mb-2">
			<div className="col-6 image">
				<img src={props.img} />
			</div>

			<div className="col-6 text text-center text-white h1 h-100 align-self-center">{props.description}</div>
		</div>
	);
};

PageImages.propTypes = {
	img: PropTypes.string,
	description: PropTypes.string
};
