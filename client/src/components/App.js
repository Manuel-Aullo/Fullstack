import React, { Component } from "react";
import {BrowserRouter, Route} from "react-router-dom";
import { connect } from "react-redux"; // compatibility between react and redux libraries
import * as actions from "../actions"; // import action creators

import Header from "./Header";
import Landing from "./Landing";

const SurveyNew = () => <h2>SurveyNew</h2>;
const Dashboard = () => <h2>Dashboard</h2>;

class App extends Component {
    componentDidMount() {
        //call action creator to fetch the actual user or if it's logged in
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                 <BrowserRouter>
                    <div>
                        <Header/>
                        <div className="container">
                            <Route exact path="/" component={Landing}/>
                            <Route exact path="/surveys" component={Dashboard}/>
                            <Route path="/surveys/new" component={SurveyNew} />
                        </div>
                    </div>
                 </BrowserRouter>
            </div>
        );
    }
    
}

export default connect (null, actions) (App);