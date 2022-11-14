import styled from "styled-components";
import Close from "../../assets/icons/close.svg";
import { Link, useLocation } from "react-router-dom";

interface Props {
  sidebarOpen: boolean;
}

const StyledSidebar = styled.section<Props>`
  background-color: #1e1e1e;
  color: white;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 300px;
  right: ${(props) => (props.sidebarOpen ? 0 : `-300px`)};
  transition: all 0.4s;
  z-index: 5;
  padding: 2em;
  box-sizing: border-box;

  .close-icon {
    text-align: right;
  }

  ul {
    list-style: none;
  }

  li {
    margin: 2rem 0;
    a {
      color: white;
      text-decoration: none;
    }

    a.active {
      font-weight: bold;
    }
  }
`;

interface props {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Sidebar({ sidebarOpen, setSidebarOpen }: props) {
  const location = useLocation();
  return (
    <StyledSidebar sidebarOpen={sidebarOpen}>
      <div className="close-icon" onClick={() => setSidebarOpen(false)}>
        <img src={Close} />
      </div>
      <ul>
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className={location.pathname === "/services" ? "active" : ""}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/faq"
            className={location.pathname === "/faq" ? "active" : ""}
          >
            FAQ
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className={location.pathname === "/blog" ? "active" : ""}
          >
            Blog
          </Link>
        </li>
      </ul>
    </StyledSidebar>
  );
}
