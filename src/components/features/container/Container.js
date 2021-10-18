import React from "react";
import "../../../styles/css-styles/sass-styles/index.css";
import { Portfolio } from "../../pages/portfolio/Portfolio";
import { Home } from "../../pages/home/Home";
import { Contact } from "../../pages/contact/Contact";

export const Container = () => {
	return (
		<div className="container1 .container-md" id="container">
			<Home />
			<Portfolio />
			<Contact />
		</div>
	);
};
