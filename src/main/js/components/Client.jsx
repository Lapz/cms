import React, {Component} from 'react';

import {NavBar,NavBarItem} from './NavBar.jsx';
import Post from './Post.jsx';

class Client extends Component {
    render() {
        return (
            <div>
                <NavBar>
                    {/*<NavBarItem linkTo="/about" navText="About Page"/>*/}
                    <NavBarItem linkTo="post/1" navText="Homepage"/>
                    {/*<NavBarItem linkTo="/contact" navText="Contact"/>*/}
                    {/*<NavBarItem linkTo="admin/" navText="Login"/>*/}
                </NavBar>
                {this.props.children}




            </div>
        );
    }
}

export default Client;