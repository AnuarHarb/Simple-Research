import styled from "styled-components";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

interface styleProps {
  vertical: boolean;
}

const StyledCard = styled(Card)<styleProps>`
  display: grid;
  grid-template-columns: ${(props) => (props.vertical ? "1fr" : "2fr 3fr")};
  grid-gap: 2em;
  padding: 4em;
  margin: 2em 0;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    padding: 2em;
  }

  .text-right {
    ${(props) => (props.vertical ? "left" : "right")};
  }

  .avatar {
    display: flex;
    justify-content: ${(props) => (props.vertical ? "flex-start" : "flex-end")};
    align-items: center;
    gap: 2rem;

    @media (max-width: 576px) {
      justify-content: flex-start;
      img {
        width: 100%;
      }
    }
  }
`;

interface props {
  title?: string;
  description?: string;
  cta?: string;
  ctaLink?: string;
  children?: React.ReactNode;
  vertical?: boolean;
}

export function ImageCard({
  children,
  title,
  description,
  cta,
  ctaLink = "/",
  vertical,
}: props) {
  return (
    <StyledCard vertical={vertical}>
      <div className="text-right">{children}</div>
      <div>
        <h2 className="fw-bold mb-2">{title}</h2>
        <p className="ff-ws">{description}</p>
        {cta && (
          <Link to={ctaLink}>
            <Button>{cta}</Button>
          </Link>
        )}
      </div>
    </StyledCard>
  );
}
