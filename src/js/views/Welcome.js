import React, { useState } from "react";
import { singIn } from "../utilities/signIn";
import { useHistory } from "react-router-dom";
import { Bible } from "../component/Bible";

export const Welcome = () => {
	return <Bible />;
};
