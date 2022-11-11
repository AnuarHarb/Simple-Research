import styled from "styled-components";
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
    gap: 2rem;
    font-weight: bold;
    font-size: 20px;
    margin: 2rem 0;
    flex-wrap: wrap;
  }
`;

export function Footer() {
  return (
    <StyledFooter>
      <Container>
        <div className="title">SimpleResearch</div>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Blog</li>
          <li>FAQ</li>
          <li>Survey cost calculator</li>
          <li>Contact</li>
        </ul>
        <div>
          <p>© 2022 SimpleResearch.co • All rights reserved</p>
        </div>
      </Container>
    </StyledFooter>
  );
}
