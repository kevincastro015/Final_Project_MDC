import React from "react";
import PeopleWorship from "../../img/PeopleWorshippingSmall.jpg";

export const Images = () => {
	return (
		<div className="row text-over-image">
			<div className="col-6 image">
				<img src={PeopleWorship} />
			</div>

			<div className="col-6 text text-center text-white h1 h-100 align-self-center">
				Our mission is
				<span className="highlight-text"> simple,</span> to bring those who are far from God close to him.
			</div>
		</div>
	);
};
