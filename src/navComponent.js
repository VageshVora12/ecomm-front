import React from "react";
 import {Container,Navbar,Nav,NavDropdown} from "react-bootstrap";

const NavBarComponent=()=>{
  const navstyle={
    backgroundColor: "#2874f0",
    Color: "#FFFFFF"
  }
    return(
        <React.Fragment>
            <Navbar style = {navstyle} variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="/main">SHOPPING</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="/home">HOME</Nav.Link>
        <Nav.Link href ="/products">PRODUCTS</Nav.Link>
        <Nav.Link href ="/category">CATEGORY</Nav.Link>
        <Nav.Link href ="/shopping">shopping</Nav.Link>
        <NavDropdown title="WANNA ADD" id="basic-nav-dropdown">
          <NavDropdown.Item href="/user-form">ADD USER</NavDropdown.Item>
          <NavDropdown.Item href="/category-form">ADD CATEGORY</NavDropdown.Item>
          <NavDropdown.Item href="/product-form">ADD PRODUCT</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </React.Fragment>
    )
}
export default NavBarComponent;