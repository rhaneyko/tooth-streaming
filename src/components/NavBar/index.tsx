import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

import { Bars, Container, Nav, Logo } from "./styles";

const NavBar = () => {
  const [active, setActive] = useState("nav_menu");
  const [icon, setIcon] = useState("nav_toggler");
  const navToggle = () => {
    if (active === "nav_menu") {
      setActive("nav_menu nav_active");
    } else setActive("nav_menu");

    if (icon === "nav_toggler") {
      setIcon("nav_toggler");
    } else setIcon("nav_toggler");
  };

  return (
    <Container>
      <Logo>LOGO</Logo>
      <Router>
        <Bars onClick={navToggle} className={icon} />
        <Nav className={active}>
          <NavHashLink to="#home">Home</NavHashLink>
          <NavHashLink smooth to="#movies">
            Filmes
          </NavHashLink>
          <NavHashLink smooth to="#series">
            Series
          </NavHashLink>
        </Nav>
      </Router>
    </Container>
  );
};

export default NavBar;