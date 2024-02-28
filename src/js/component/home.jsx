import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import NavBar from "./navbar"

import Jumbotron from "./jumbotron"

import Card from "./card"

import Footer from "./footer"

//create your first component
const Home = () => {
	return (

		<div>
			<div>
				<NavBar />
			</div>
			<div >
				<Jumbotron />
				<div className="jumboCarta">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer/>
			<div>
			</div>
		</div>
	);
};



export default Home;
