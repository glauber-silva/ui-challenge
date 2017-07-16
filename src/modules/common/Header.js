import React from 'react';
import {IndexLink} from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Header.scss';

class Header extends React.Component {
    render(){
        <div className="Header">
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <IndexLink to="/"> GeoLocation </IndexLink>
                    </Navbar.Brand>    
                </Navbar.Header>
            </Navbar>
        </div>

    }
}

export default Header;