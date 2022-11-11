import styled from "styled-components";
import { Container, Button, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "../assets/icons/menu.svg";

const StyledNav = styled(Nav)`
  gap: 2rem;

  a {
    color: black;
  }

  a:hover {
    color: blue;
  }

  @media (max-width: 992px) {
    display: none !important;
  }
`;

const StyledSide = styled.aside`
  button {
    border: none;
    box-shadow: none;
    background-color: transparent;
  }
`;

interface props {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Navbar({ setSidebarOpen }: props) {
  const openSideMenu = () => {
    setSidebarOpen(true);
  };

  return (
    <NavbarBs className="bg-white shadow-sm mb-3 pt-4 pb-4">
      <Container>
        <Nav.Link to="/" as={NavLink}>
          <h4 className="fw-bold">SimpleResearch</h4>
        </Nav.Link>
        <StyledNav className=" d-flex align-items-center">
          <Nav.Link className="fw-bold" to="/about" as={NavLink}>
            About
          </Nav.Link>
          <Nav.Link className="fw-bold" to="/services" as={NavLink}>
            Services
          </Nav.Link>
          <Nav.Link className="fw-bold" to="/blog" as={NavLink}>
            Blog
          </Nav.Link>
          <Nav.Link className="fw-bold" to="/faq" as={NavLink}>
            FAQ
          </Nav.Link>
          <Nav.Link className="fw-bold" to="/contact" as={NavLink}>
            Contact
          </Nav.Link>
          <Button className="rounded-pill px-4 py-2" variant="outline-primary">
            Get Started
          </Button>
        </StyledNav>
        <StyledSide>
          <button onClick={() => openSideMenu()}>
            <img src={MenuIcon} />
          </button>
        </StyledSide>
      </Container>
    </NavbarBs>
  );
}
