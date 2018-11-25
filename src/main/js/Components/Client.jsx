import React, {Component} from 'react';

import {NavBar,NavBarItem} from './NavBar.jsx';

class Client extends Component {
    render() {
        return (
            <div>
                <NavBar>
                    {/*<NavBarItem linkTo="/about" navText="About Page"/>*/}
                    <NavBarItem linkTo="/" navText="Homepage"/>
                    {/*<NavBarItem linkTo="/contact" navText="Contact"/>*/}
                    {/*<NavBarItem linkTo="admin/" navText="Login"/>*/}
                </NavBar>

                {this.props.children}



            </div>
        );
    }
}

export default Client;