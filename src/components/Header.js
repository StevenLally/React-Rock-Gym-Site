import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <Navbar color="dark" dark fixed="top" expand="md">
        <div className="container">
          <NavbarBrand href="/">The Quarry</NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home"> Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/info"> Information</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/waiver"> Waiver</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/blog"> Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus"> Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}

export default Header;