import React, {Component} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
    
    render() {
        return (
            <nav>
                <div className="container">
                    <div className="nav-wrapper">
                        <Link
                            to={this.props.auth ? "/surveys" : "/"} 
                            className="left brand-logo"
                        >
                            Emaily
                        </Link>
                        <ul className="right">
                            {this.props.auth ? 
                                <React.Fragment>
                                    <li key="pay"><Payments /></li>
                                    <li key="logout"><a href="/api/logout">Logout</a></li>
                                </React.Fragment>
                                : 
                                <li key="login"><a href="/auth/google">Login with Google</a></li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

// entire state object from the redux store: here we care about auth from 
// /reducers/index.js we destructure the auth property off the state object
function mapStateToProps( { auth } ) { 
    return { auth };
}

// Hook up the component to the redux store with connect helper
// and pass de data as the first argument
export default connect(mapStateToProps) (Header);