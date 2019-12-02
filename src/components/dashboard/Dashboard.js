import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

export class Dashboard extends Component {
	render() {
		// console.log(this.props)

		const { projects, auth } = this.props;
		if (!auth.uid) return <Redirect to="/signin" />;
		return (
			<div className="container dashboard">
				<div className="row">
					<div className="col s12 m6">
						<ProjectList projects={projects} />
					</div>
					<div className="col s12 m5 offset-m1">
						<Notifications />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	// console.log(state);
	return {
		projects: state.firestore.ordered.projects,
		auth: state.firebase.auth
		// projects: state.project.projects
	};
};

export default compose(
	connect(mapStateToProps),
	// firestoreConnect(['projects'])
	firestoreConnect([{ collection: "projects" }])
)(Dashboard);