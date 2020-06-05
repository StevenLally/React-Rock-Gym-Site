import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
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
      <Navbar dark fixed="top" expand="md">
        <div className="container">
          <NavbarBrand className="mr-auto" href="/">The Quarry</NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-item active" to="/home"> Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-item" to="/info"> Information</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-item" to="/waiver"> Waiver</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-item" to="/blog"> Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-item" to="/contactus"> Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}

export default Header;