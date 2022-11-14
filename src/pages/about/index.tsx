import styled from "styled-components";
// Components
import { Hero } from "../../components/hero";
import { IconCard } from "../../components/iconCard";
// Assets
import About1 from "../../assets/images/about-1.svg";
import About2 from "../../assets/images/about-2.svg";
import About3 from "../../assets/images/about-3.svg";
import About4 from "../../assets/images/about-4.svg";
import About5 from "../../assets/images/about-5.svg";

const StyledValue = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr) 1.5fr;
  grid-auto-rows: 1fr;
  grid-gap: 2rem;
  align-items: center;
  padding: 2em;

  .value-title {
    font-size: 3em;
    margin: 0.5em 0;
  }

  .value-text {
    font-size: 1.5em;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    .proposition {
      grid-column: 1/3;
      grid-row: 1/2;
    }
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    .proposition {
      grid-column: 1/2;
      grid-row: 1/2;
    }
  }
`;

const StyledTeam = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-gap: 2em;
  align-items: center;
  padding: 2em;

  p {
    font-size: 1.5em;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    img {
      width: 100%;
    }
  }
`;

export function About() {
  return (
    <>
      <section>
        <h1>About</h1>
        <Hero title="Simplifying market research for organizations to get the insight they need for better decision making">
          <img
            className="d-none d-xs-none d-sm-none d-md-block d-lg-block"
            src={About1}
          ></img>
        </Hero>
      </section>

      <StyledValue>
        <IconCard
          icon={About2}
          title="Cost transparency"
          description="Cost transparecy is essential to how we operate. Tell us about your project, and we’ll provide you a fixed quote from day one."
        />
        <IconCard
          icon={About3}
          title="Easy access to insight"
          description="No-one should have a hard time getting the insight they need, when they need it. We’ll provide you easy access and visibility to insight."
        />
        <IconCard
          icon={About4}
          title="Speedy delivery"
          description="Traditionally, market research and survey development takes months to get done. We’ll deliver your insights in 2-3 weeks, all while keeping quality at the core. "
        />
        <div className="proposition">
          <h2 className="value-title">Unique value proposition</h2>
          <p className="value-text">
            3 reasons why you need to simplify your research.
          </p>
        </div>
      </StyledValue>

      <StyledTeam>
        <img src={About5} />
        <div>
          <h2>Steven Riskey</h2>
          <p>CEO & Founder</p>
          <div></div>
        </div>
        <p>
          Steven Riskey and his team of survey experts have provided expertise
          to clients around the world for over 12 years. Their experience can
          help you leverage the most valuable insights from your target
          audience.
        </p>
      </StyledTeam>
    </>
  );
}
