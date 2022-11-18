import styled from "styled-components";
import { Container, Button, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "../../assets/icons/menu.svg";
import { useWindowSize } from "../../hooks/useWindowSize";

const StyledNav = styled(Nav)`
  gap: 2em;

  a {
    color: black;
  }

  a:hover {
    color: blue;
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
  const { width } = useWindowSize();

  const openSideMenu = () => {
    setSidebarOpen(true);
  };

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  return (
    <NavbarBs className="bg-white shadow-sm mb-3 pt-4 pb-4">
      <Container>
        <Nav.Link to="/" as={NavLink}>
          <h4 className="fw-bold">SimpleResearch</h4>
        </Nav.Link>

        {width && (
          <>
            <StyledNav
              className={`align-items-center ${
                width >= 992 ? "d-flex" : "d-none"
              }`}
            >
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
              <Nav.Link className="fw-bold" to="/calculator" as={NavLink}>
                <Button
                  className="rounded-pill px-4 py-2"
                  variant="outline-primary"
                >
                  Get Started
                </Button>
              </Nav.Link>
            </StyledNav>

            <StyledSide className={`${width < 992 ? "d-flex" : "d-none"}`}>
              <button onClick={() => openSideMenu()}>
                <img src={MenuIcon} />
              </button>
            </StyledSide>
          </>
        )}
      </Container>
    </NavbarBs>
  );
}
