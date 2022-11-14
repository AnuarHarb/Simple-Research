import styled from "styled-components";
import { Button } from "react-bootstrap";

const StyledHero = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 4rem 0;
  grid-gap: 2em;

  .info {
    align-self: center;
  }

  .title {
    font-size: 4em;
    font-weight: bold;
  }

  .desciption {
    font-family: workSans;
    font-weight: light;
    font-size: 1.5em;
  }

  @media (max-width: 1200px) {
    .title {
      font-size: 3em;
    }
  }

  @media (max-width: 998px) {
    grid-template-columns: 1fr;
  }

  img {
    width: 100%;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1rem 0;
  grid-gap: 2em;
`;

type Props = {
  title: string;
  description: string;
  descriptionDecorator?: JSX.Element;
  grid?: boolean;
  button?: string;
  buttonOutlined?: boolean;
  children?: React.ReactNode;
};

export function Hero({
  title,
  description,
  descriptionDecorator,
  grid,
  button,
  buttonOutlined,
  children,
}: Props) {
  return (
    <StyledHero className="mt-5">
      <div className="info">
        <h1 className="title my-3">{title}</h1>
        <p className="desciption my-3">{description}</p>
        {descriptionDecorator}
        {grid && (
          <StyledGrid>
            <article className="fw-bold">
              Configure your survey services and specs
            </article>
            <article className="fw-bold">
              Calculate the price, no hidden fees
            </article>
            <article className="fw-bold">
              Launch your survey in days, not weeks
            </article>
          </StyledGrid>
        )}
        {button && (
          <Button
            className="rounded-pill px-4 py-2"
            variant={buttonOutlined ? "outline-primary" : "primary"}
          >
            {button}
          </Button>
        )}
      </div>
      <div>{children}</div>
    </StyledHero>
  );
}
