import React, { Component } from "react";
import { link } from "react-router";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, NavItem, Navbar, NavLink, DropdownItem } from "reactstrap";

class NavigationBar extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    const userLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="#">Sign Out</a>
        </li>
      </ul>
    );
    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <link to="/signup">Sign Up</link>
        </li>
        <li>
          <link to="/login">Login</link>
        </li>
      </ul>
    );
    return <div>{isAuthenticated ? userLinks : guestLinks}</div>;
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}
export default connect(mapStateToProps)(NavigationBar);
