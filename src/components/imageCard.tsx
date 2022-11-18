import styled from "styled-components";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const StyledCard = styled(Card)`
  display: grid;
  grid-template-columns: ${(props) => (props.vertical ? "1fr" : "2fr 3fr")};
  grid-gap: 2em;
  padding: 4em;
  margin: 2em 0;

  .text-right {
    ${(props) => (props.vertical ? "left" : "right")};
  }

  .avatar {
    display: flex;
    justify-content: ${(props) => (props.vertical ? "flex-start" : "flex-end")};
    align-items: center;
    gap: 2rem;
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
    <StyledCard className="d-none d-sm-grid" vertical={vertical}>
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
