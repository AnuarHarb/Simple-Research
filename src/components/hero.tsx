import styled from "styled-components";
import { Button } from "react-bootstrap";

interface styledProps {
  smallTitle?: boolean;
  right?: boolean;
  imageContent?: boolean;
}

const StyledHero = styled.section<styledProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 4rem 0;
  grid-gap: 2em;

  .info {
    align-self: center;
    grid-column: ${(props) => (props.right ? "2/3" : "1/2")};

    @media (max-width: 576px) {
      display: flex;
      flex-direction: column;
    }
  }

  .content {
    grid-column: ${(props) => (props.right ? "1/2" : "2/3")};
    grid-row: 1/2;
  }

  .hero-title {
    font-size: ${(props) => (props.smallTitle ? "3em" : "4em")};
    font-weight: bold;

    @media (max-width: 424px) {
      font-size: 2em;
    }
  }

  .hero-subtitle {
    margin-bottom: 4rem;

    @media (max-width: 576px) {
      margin-bottom: 2rem;
    }
  }

  .desciption {
    font-family: workSans;
    font-weight: light;
    font-size: 1.5em;
  }

  img {
    max-width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 1200px) {
    .title {
      font-size: 3em;
    }
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    padding: 2rem 0;

    .info {
      grid-column: 1/2;
    }

    .content {
      grid-column: 1/2;
      grid-row: ${(props) => (props.imageContent ? "1/2" : "auto")};

      .content-image {
        text-align: center;
      }
    }
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
  subtitle?: string;
  description?: string;
  descriptionDecorator?: JSX.Element;
  grid?: boolean;
  button?: string;
  buttonOutlined?: boolean;
  children?: React.ReactNode;
  smallTitle?: boolean;
  right?: boolean;
  imageContent?: boolean;
};

export function Hero({
  title,
  subtitle,
  description,
  descriptionDecorator,
  grid,
  button,
  buttonOutlined,
  children,
  smallTitle,
  right,
  imageContent,
}: Props) {
  return (
    <StyledHero
      smallTitle={smallTitle}
      right={right}
      imageContent={imageContent}
    >
      <div className="info">
        {subtitle && <h4 className="hero-subtitle">{subtitle}</h4>}
        <h1 className="hero-title my-3">{title}</h1>
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
      <div className="content">{children}</div>
    </StyledHero>
  );
}
