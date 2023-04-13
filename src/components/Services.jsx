import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
	state = {
		services: [
			{
				icon: <FaCocktail />,
				title: "free cocktails",
				info: "cocktails services from the hotel, free drinks on monday "
			},
			{
				icon: <FaHiking />,
				title: "Endless Hiking",
				info: "Hiking services from the hotel, come with us! "
			},
			{
				icon: <FaShuttleVan />,
				title: "Free shuttle",
				info: "Free and fast shuttle van services from the hotel, let's run "
			},
			{
				icon: <FaBeer />,
				title: "Strongest Beer",
				info: "Don't worry, our shuttle van is ready to take you home!"
			}
		]
	};
	render() {
		return (
			<section className="services">
				<Title title="services" />
				<div className="services-center">
					{this.state.services.map((item, index) => {
						return (
							<article key={index} className="service">
								<span>{item.icon}</span>
								<h6>{item.title}</h6>
								<p>{item.info}</p>
							</article>
						);
					})}
				</div>
			</section>
		);
	}
}
