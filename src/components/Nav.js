import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
    render() {
        return (
            <nav>
                <h1>{this.props.text}</h1>
            </nav>

        );
    }
}
export default Nav;