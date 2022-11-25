import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { EXAMPLE_LABEL, LOGOUT_LABEL } from "../../../utils/Constants";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">{EXAMPLE_LABEL}</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem
            onClick={() => {
              navigate("/login");
            }}
          >
            <NavLink>{LOGOUT_LABEL}</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
