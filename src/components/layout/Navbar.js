import React from "react";
import { Link } from "react-router-dom";
import SignedinLinks from "./SignedinLinks";
import SignedoutLinks from "./SignedoutLinks";
import { connect } from "react-redux";

const Navbar = props => {
	const { auth } = props;
	// console.log(auth);
	const links = auth.uid ? <SignedinLinks /> : <SignedoutLinks />;
	return (
		<nav className="nav-wrapper grey darken-4">
			<div className="container">
				<Link to="/" className="brand-logo">
					MartPlan
				</Link>
				{links}
			</div>
		</nav>
	);
};

const mapStateToProps = state => {
	// console.log(state);
	return {
		auth: state.firebase.auth
	};
};

export default connect(mapStateToProps)(Navbar);
