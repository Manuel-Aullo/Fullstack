import React from "react";
import { connect } from "react-redux";

class Header extends React.Component {
    render() {
        return (
            <nav>
                <div className="container">
                    <div className="nav-wrapper">
                        <a className="left brand-logo">
                            Emaily
                        </a>
                        <ul className="right">
                            <li>
                                {this.props.auth ? <a href="/api/logout">Logout</a> : <a href="/auth/google">Login with Google</a>}
                            </li>
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