import styled from "styled-components";
import { Hero } from "../../components/hero";
import { IndustryCard } from "../../components/industryCard";
import { CardCarrousel } from "../../components/cardCarrousel";
import { ImageCard } from "../../components/imageCard";
// assets
import Services1 from "../../assets/images/services-1.png";
import Services2 from "../../assets/images/services-2.png";
import Services3 from "../../assets/images/services-3.png";
import Services4 from "../../assets/images/services-4.png";
import Services5 from "../../assets/images/services-5.png";
import Discovery from "../../assets/images/discovery.png";
import Expert from "../../assets/images/expert.png";

const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  margin: 2em 0;

  .avatar {
    justify-content: flex-start;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export function Services() {
  return (
    <>
      <Hero
        title="Build Surveys, Launch Surveys, and Generate the Insights You Need"
        subtitle="Services"
        description="Not sure how to leverage surveys to get the insight you need, when you need them?  We’ll design, host, and program your surveys so you don’t have to. On top of that, we’ll deliver your insights within 2-3 weeks."
        button="Get started ->"
        link="/calculator"
      >
        <img
          className="d-none d-xs-none d-sm-none d-md-block d-lg-block"
          src={Services1}
        ></img>
      </Hero>

      <CardCarrousel type="industries" />

      <section>
        <Hero
          smallTitle
          imageContent
          subtitle="Design your survey"
          title="Ask the right questions, get the right answers."
          description="If you have an idea of the insights you need, but need a team with the skills and expertise to script the right questionnaire, that’s where we come in! Fill out our discovery survey to get started."
        >
          <img src={Services2}></img>
        </Hero>
        <Hero
          right
          smallTitle
          imageContent
          subtitle="Program your survey"
          title="Setup your survey and use it anywhere you want."
          description="We’ll program your survey in Qualtrics, Decipher, Survey Monkey, or a multitude of other best-in-class survey hosting platforms.  Your survey will be programmed into a format that can be uploaded directly to your personal survey license – or, it can be hosted, seamlessly, in SimpleResearch’s platform."
        >
          <img src={Services3}></img>
        </Hero>
        <Hero
          smallTitle
          imageContent
          subtitle="Host your survey"
          title="Access and host your data without the all the hassle."
          description="You have a survey, but don’t want to buy an expensive survey license that you’ll only use once – or that you don’t know how to use. Why buy an expensive license for a single (or a few) surveys, anyway?  No more contracts, subscriptions and hefty fees. We’ll give you simple, transparent access to data and survey respondents."
        >
          <img src={Services4}></img>
        </Hero>
        <Hero
          right
          smallTitle
          imageContent
          subtitle="Analyze your survey"
          title="Make sense of your data and visualize it in a simple way."
          description="Now that you have survey data, what’s next?  I need help visualizing my data in powerpoint, keynote, excel, or other formats. The analysis can include insights and implications, be a simple cross-tab or organized files.  You can also simply outsource the work of regression, TURF, conjoint, max-diff, or other advanced analytics that are required to generate meaningful insights from your survey data."
        >
          <img src={Services5}></img>
        </Hero>
      </section>

      <CardCarrousel type="testimonial" />

      <StyledGrid>
        <ImageCard
          vertical
          title="Discovery survey"
          description="Our discovery survey helps us better understand your objectives. Talk to us about your project and get full cost transparency from the get go."
          cta="Get a cost estimate ->"
          ctaLink="/calculator"
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
          ctaLink="/calendry"
        >
          <div className="avatar text-right">
            <img src={Expert} />
          </div>
        </ImageCard>
      </StyledGrid>
    </>
  );
}
