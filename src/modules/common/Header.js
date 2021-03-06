import React from 'react';
import {IndexLink} from 'react-router';
import { Navbar } from 'react-bootstrap';
import './Header.scss';

class Header extends React.Component {
    render(){
        return(
            <div className="Header">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <IndexLink to="/"> GeoLocation Test</IndexLink>
                        </Navbar.Brand>    
                    </Navbar.Header>
                </Navbar>
            </div>
        );
    }
}

export default Header;