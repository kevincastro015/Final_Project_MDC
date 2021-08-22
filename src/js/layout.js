import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";

import { Home } from "./views/home";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Registration } from "./views/Registration";
import { LogIn } from "./views/LogIn";
import { Welcome } from "./views/Welcome";
import { FullRegistration } from "./views/FullRegistration";

export const Layout = () => {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/registration" component={Registration} />
					<Route exact path="/login" component={LogIn} />
					<Route exact path="/welcome" component={Welcome} />
					<Route exact path="/fullregistration" component={FullRegistration} />
					<Route render={() => <h1 className="notfound">Not found!</h1>} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
