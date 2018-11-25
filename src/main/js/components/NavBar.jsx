import React, {Component} from 'react';
import {Link} from 'react-router-dom';



export class NavBar extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <nav className="nav">


                <div className="nav-right nav-menu" >
                    {this.props.children}
                </div>

            </nav>
        )
    }
}


const NavBarItem = ({linkTo,navText}) => (
    <div className="navbar-item">
        <Link to={linkTo}> {navText} </Link>
    </div>
);

export {NavBarItem};