import React from "react";
import { useParams } from "react-router";

export const Navbar = () => {

	return (
		<ul class="nav justify-content-center container-nav bg-dark">
			<li class="nav-item">
				<a class="nav-link active text-primary" aria-current="page" href="#">Active</a>
			</li>
			<li class="nav-item">
				<a class="nav-link text-primary" href="#">contact</a>
			</li>
			<li class="nav-item">
				<a class="nav-link text-primary" href="#">Link</a>
			</li>

		</ul>);
};
