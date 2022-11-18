import styled from "styled-components";
// Components
import { Hero } from "../../components/hero";
import { CardCarrousel } from "../../components/cardCarrousel";
import { IconCard } from "../../components/iconCard";
import { ImageCard } from "../../components/imageCard";
// Assets
import About1 from "../../assets/images/about-1.svg";
import About2 from "../../assets/images/about-2.svg";
import About3 from "../../assets/images/about-3.svg";
import About4 from "../../assets/images/about-4.svg";
import About5 from "../../assets/images/about-5.svg";
import About6 from "../../assets/images/about-6.svg";
import Discovery from "../../assets/images/discovery.svg";
import Expert from "../../assets/images/research-expert.svg";

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

const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  margin: 2em 0;
`;

export function About() {
  return (
    <>
      <section>
        <Hero
          title="Simplifying market research for organizations to get the insight they need for better decision making"
          subtitle="About"
        >
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

      <CardCarrousel>
        <ImageCard
          title="Client testimonials"
          description="My favorite thing about working with SimpleResearch is that the
              company truly lives by its values. It makes for a fun, inclusive,
              inspiring work environment where people feel comfortable bringing
              their own perspective and ideas to work."
        >
          <div className="avatar text-right">
            <img src={About6} />
            <div>
              <h5>Full Name</h5>
              <p>Company Name</p>
            </div>
          </div>
        </ImageCard>
      </CardCarrousel>

      <StyledGrid>
        <ImageCard
          vertical
          title="Discovery survey"
          description="Our discovery survey helps us better understand your objectives. Talk to us about your project and get full cost transparency from the get go."
          cta="Get a cost estimate ->"
        >
          <div className="avatar text-right">
            <img src={Discovery} />
          </div>
        </ImageCard>
        <ImageCard
          vertical
          title="Talk to a research expert"
          description="Contact SimpleResearch today for a full overview of our expertise and methodologies."
          cta="Get in touch ->"
        >
          <div className="avatar text-right">
            <img src={Expert} />
          </div>
        </ImageCard>
      </StyledGrid>
    </>
  );
}
