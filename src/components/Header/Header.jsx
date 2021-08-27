import React from "react";
import Join from "../../components/Join/Join";
import {Container,Logo,NavbarLink,Navbar,NavItems} from "./style";

function Header(){
  return (
    <>
    <Navbar>
      <Logo to="/">{`${process.env.REACT_APP_NAME}`}</Logo>
      <NavItems>
        <Container>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/about">About</NavbarLink>
        <NavbarLink to="/services">Services</NavbarLink>
        <NavbarLink to="/space">Space</NavbarLink>
        </Container>
      </NavItems>
        <Join/>
    </Navbar>
    
    </>
  );
};

export default Header;
