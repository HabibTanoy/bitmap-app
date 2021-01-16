import React, { Component } from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import NavStyle from '../navbar/Nav.module.css'



class MainNav extends Component {
    state = { 
        offical_address:'https://barikoi.com/'
     }

    render() { 
        return ( 
            <div>
                <Navbar collapseOnSelect expand="lg" fixed="top" className={NavStyle.bgChange}>
                    <Navbar.Brand href={this.state.offical_address}>
                    <div className="pl-1">
                       <span className={NavStyle.bari}>Bari</span><span className={`pr-3 ${NavStyle.koi}`}>koi</span>
                    </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        {/* <Link to="/" className={`${NavStyle.docs} pl-0`}>docs</Link> */}
                        </Nav>
                        <Nav>
                        <Link exact to="/" className={NavStyle.navTag}>User</Link>
                        <Link to="/bit-info" className={NavStyle.navTag}>Postman</Link>
                        <Link to="/bkoi-viz" className={NavStyle.navTag}>Bit-Map</Link>
                        <Link to="/bkoi-admin" className={NavStyle.navTag}>Admin</Link>
                        {/* <Link to="/bkoi-geo" className={NavStyle.navTag}>server</Link> */}
                        <a href="http://geoserver.barikoi.com:3000/login?" className={NavStyle.navTag}>Map Panel</a>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
         );
    }
}
 
export default MainNav;