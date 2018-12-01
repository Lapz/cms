import React, {Component} from 'react';

import {NavBar,NavBarItem} from './NavBar.jsx';
import Post from './Post.jsx';

class Client extends Component {
    render() {
        return (
            <div>
                <NavBar>
                    <NavBarItem linkTo="/" navText="Homepage"/>
                    <NavBarItem linkTo="/about" navText="About Page"/>
                    <NavBarItem linkTo="/contact" navText="Contact"/>
                    <NavBarItem linkTo="admin/" navText="Login"/>
                </NavBar>

                <div className="container">
                    <div className="columns">
                        <div className="column is-half">
                                {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Client;