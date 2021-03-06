//Init
import React from "react";
import { Switch, Route } from "react-router-dom";

//Importing Routes
import PortfolioRoutes from "./PortfolioRoutes";
import BlogRoutes from "./BlogRoutes";

//Pages
import Home from "../pages/Home";
import Recent from "../pages/Recent";
import Articles from "../pages/Articles";
import ContactMe from "../pages/ContactMe";
import ErrorPage from "../pages/ErrorPage";

//Component
function PageRoutes() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/portfolio" component={Recent} />
			<Route exact path="/portfolio/*" component={PortfolioRoutes} />
			<Route exact path="/blog" component={Articles} />
			<Route exact path="/blog/*" component={BlogRoutes} />
			<Route exact path="/contact" component={ContactMe} />
			<Route component={ErrorPage} />
		</Switch>
	);
}

export default PageRoutes;
