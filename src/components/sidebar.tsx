import styled from "styled-components";
import Close from "../assets/icons/close.svg";

const StyledSidebar = styled.section`
  background-color: #1e1e1e;
  color: white;

  .close-icon {
    text-align: right;
  }

  ul {
    list-style: none;
  }

  li {
    margin: 2rem;
  }
`;

interface props {
  sidebarOpen: boolean;
}

export function Sidebar({ sidebarOpen }: props) {
  return (
    <StyledSidebar>
      <div className="close-icon">
        <img src={Close} />
      </div>
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>FAQ</li>
        <li>Blog</li>
      </ul>
    </StyledSidebar>
  );
}
