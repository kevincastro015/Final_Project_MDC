import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "../../styles/footer.scss";

mapboxgl.accessToken =
	"pk.eyJ1IjoibWFyY2Vsb2NhbHZlcyIsImEiOiJja3M5NDJyaWcwNTZkMndwNTI5cGxoNGlwIn0.sGO0iW0yrNTyXE6jfrqyaQ";

export const Footer = () => {
	return (
		<footer className="text-center text-lg-start bg-light text-muted">
			{/* <!-- Section: Social media --> */}
			<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
				{/* <!-- Left --> */}
				<div className="me-5 d-none d-lg-block">
					<span>Get connected with us on social networks:</span>
				</div>
				{/* <!-- Left --> */}

				{/* <!-- Right --> */}
				<div>
					<a href="" className="ml-2 text-reset">
						<i className="fab fa-facebook-f" />
					</a>
					<a href="" className="ml-2 text-reset">
						<i className="fab fa-instagram" />
					</a>
				</div>
				{/* <!-- Right --> */}
			</section>
			{/* <!-- Section: Social media --> */}

			{/* <!-- Section: Links  --> */}
			<section className="">
				<div className="container text-center text-md-start mt-5">
					{/* <!-- Grid row --> */}
					<div className="row mt-3">
						{/* <!-- Grid column --> */}
						<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
							{/* <!-- Content --> */}
							<h6 className="text-uppercase fw-bold mb-4">
								<i className="fas fa-church mr-2" />
								Ocean Life Church
							</h6>
							<p>Jesus is our message. People are our heart.</p>
						</div>

						<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
							<h6 className="text-uppercase fw-bold mb-4">Contact</h6>
							<p>
								<i className="fas fa-home me-3" /> 301 Biscayne Blvd, Miami, FL 33132
							</p>
							<p>
								<i className="fas fa-envelope me-3" />
								Hello@OceanLifeChurch.com
							</p>
							<p>
								<i className="fas fa-phone me-3" /> 305-305-3050
							</p>
							<p>
								<i className="fas fa-print me-3" /> 305-305-3051
							</p>
						</div>
						<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
							{/* <div ref={mapContainer} className="map-container" /> */}
							<img
								alt="static Mapbox map of the Ocean Life Church miami area"
								src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+555555(-80.18916282390427,25.760016475659878)/-80.1892,25.7602,15.96,0/300x300?access_token=pk.eyJ1IjoibWFyY2Vsb2NhbHZlcyIsImEiOiJja3M5NDJyaWcwNTZkMndwNTI5cGxoNGlwIn0.sGO0iW0yrNTyXE6jfrqyaQ"
							/>
						</div>
					</div>
				</div>
			</section>

			<div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
				© 2021 Copyright Ocean Life Church
			</div>
		</footer>
	);
};
