import styled from "styled-components";
import { Button, Card } from "react-bootstrap";

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 2rem;
  max-width: 320px;
  height: 100%;
  box-sizing: border-box;

  .card-icon {
    width: 80px;
  }

  .card-title {
    font-size: 1.2em;
    font-weight: bold;
  }

  .card-description {
  }

  .card-action {
    border: none;
    background-color: transparent;
    box-shadow: none;
    cursor: pointer;
    z-index: 2;
    font-weight: bold;
    :hover {
      text-decoration: underline;
    }
  }
`;

interface props {
  icon?: string;
  title?: string;
  description?: string;
}

export function IconCard({ icon, title, description }: props) {
  return (
    <StyledCard>
      <img className="card-icon" src={icon} />
      <h4 className="card-title">{title}</h4>
      <p className="card-description">{description}</p>
    </StyledCard>
  );
}
