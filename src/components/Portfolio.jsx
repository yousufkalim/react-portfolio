//Init
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fetch from "../controllers/dataFetch";

//Style
import "../style/Portfolio.css";

//Portfolio Items Component
function PortfolioItems({ title, link, thumbnail, inHome }) {
	return (
		<Link to={link}>
			<div
				className="portfolio-item"
				style={inHome ? { border: "1px solid black" } : null}
			>
				<div className="portfolio-overlay">{title}</div>
				<img src={thumbnail} alt="Thumbnail" />
			</div>
		</Link>
	);
}

//View All Work Component
function ViewAll() {
	return (
		<Link to="/portfolio" className="view-all-link">
			<p>VIEW ALL WORK</p>
		</Link>
	);
}

//Portfolio Component
function Portfolio({ inHome }) {
	//Initializing State
	let [portfolio, setPortfolio] = useState([]);

	//Getting data from database
	useEffect(() => {
		fetch("portfolios", setPortfolio);
	}, []);

	//Rendering Component
	return (
		<React.Fragment>
			<div className="portfolio">
				{inHome
					? portfolio.slice(0, 6).map((item, index) => {
							return (
								<PortfolioItems
									key={index}
									title={item.title}
									link={item.link}
									thumbnail={item.thumbnail}
									inHome={inHome}
								/>
							);
					  })
					: portfolio.map((item, index) => {
							return (
								<PortfolioItems
									key={index}
									title={item.title}
									link={item.link}
									thumbnail={item.thumbnail}
									inHome={inHome}
								/>
							);
					  })}
			</div>

			{inHome ? <ViewAll /> : null}
		</React.Fragment>
	);
}

//Export
export default Portfolio;
