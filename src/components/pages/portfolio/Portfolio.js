import React from "react";
import Movies from "../../../Movies.png"
import Empowering from "../../../Empowering.png"
import HallOfFame from "../../../HallOfFame.png"
import Olympics from "../../..//Olympics.png";
import Card from "../../features/card/Card";
import { projectProvider, projects } from "../../../context";
export const Portfolio = () => {

	return (
		<projectProvider value={projects} >
			<div className="portfolio" id="portfolio">
				<div className="porfolio-container">
					{
						projects.map((item, key) => <Card Project={item} />)
					}


				</div>

			</div>
		</projectProvider>
	)

};
