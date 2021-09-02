import React from "react";
import PropTypes from "prop-types";

export const Carousel = props => {
	return (
		<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						src={props.image[0]}
						className="d-block w-100"
						alt="..."
						style={{ height: "75vh", width: "100%", objectFit: "cover" }}
					/>
				</div>
				<div className="carousel-item">
					<img
						src={props.image[1]}
						className="d-block w-100"
						alt="..."
						style={{ height: "75vh", width: "100%", objectFit: "cover" }}
					/>
				</div>
				<div className="carousel-item">
					<img
						src={props.image[2]}
						className="d-block w-100"
						alt="..."
						style={{ height: "75vh", width: "100%", objectFit: "cover" }}
					/>
				</div>
			</div>
		</div>
	);
};

Carousel.propTypes = {
	image: PropTypes.string
};
