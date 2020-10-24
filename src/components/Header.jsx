import React, { Component } from "react";
import banner from "../image/banner-sample.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import UserTypeCls from "./UserTypeCls";
import Customer from "./Customer";
import MainContent from "./MainContent";
import UploadExcel from "./UploadExcel";
import UploadImage from "./UploadImage";
import SimpleReactFileUpload from "./SimpleReactFileUpload";
import DemoDate from "./DemoDate";

class Header extends Component {
  state = {};
  render() {
    return (
    
      <Router>
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">MyApp</NavbarBrand>
            <NavbarToggler />
            <Collapse navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/components/MainContent">Home</Link>
                </NavItem>
                <NavItem>
                  <Link to="/components/MainContent">
                    SimpleReactFileUpload
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/components/UserTypeCls">User </Link>
                </NavItem>
                <NavItem>
                  <Link to="/components/Customer">Customer</Link>
                </NavItem>
                <NavItem>
                  <Link to="/components/UploadExcel">UploadExcel</Link>
                </NavItem>
                <NavItem>
                  <Link to="/components/UploadImage">UploadImage</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>

          {/* <img src={banner} alt="Header" width="100%" height="100px" /> */}
          {/* <nav className="homemenu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/components/UserTypeCls">User Type</Link>
              </li>
              <li>
                <Link to="/components/Customer">Customer</Link>
              </li>
            </ul>
          </nav> */}

          <Route path="/components/MainContent" component={MainContent} />
          <Route path="/components/UserTypeCls" component={UserTypeCls} />
          <Route path="/components/Customer" component={Customer} />
          <Route path="/components/UploadExcel" component={UploadExcel} />
          <Route path="/components/UploadImage" component={UploadImage} />
          <Route
            path="/components/SimpleReactFileUpload"
            component={SimpleReactFileUpload}
          />
        </div>
      </Router>
    );
  }
}

export default Header;
