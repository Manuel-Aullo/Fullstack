import React from "react";

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
                                <a>Login with Google</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;