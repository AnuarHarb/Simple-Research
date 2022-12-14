import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const StyledFooter = styled.footer`
  background-color: #030717;
  color: white;
  text-align: center;
  padding: 5rem 0;

  .title {
    font-weight: bold;
    font-size: 20px;
  }

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    gap: 2em;
    font-weight: bold;
    font-size: 20px;
    margin: 2rem 0;
    flex-wrap: wrap;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

export function Footer() {
  return (
    <StyledFooter>
      <Container>
        <div className="title">SimpleResearch</div>
        <ul>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/services">
            {" "}
            <li>Services</li>
          </Link>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
          <Link to="/faq">
            <li>FAQ</li>
          </Link>
          <Link to="/calculator">
            <li>Survey cost calculator</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
        <div>
          <p>© 2022 SimpleResearch.co • All rights reserved</p>
        </div>
      </Container>
    </StyledFooter>
  );
}
