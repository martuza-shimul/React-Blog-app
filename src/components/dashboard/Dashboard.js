import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase'


export class Dashboard extends Component {
  render() {
    // console.log(this.props)

    const { projects } = this.props;
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
    projects: state.firestore.ordered.projects
    // projects: state.project.projects
  };
};


export default compose(
  connect(mapStateToProps),
  // firestoreConnect(['projects'])
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Dashboard)

