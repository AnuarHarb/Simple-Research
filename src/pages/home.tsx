import styled from "styled-components";
import { Button, Card } from "react-bootstrap";
// components
import { Hero } from "../components/hero";
import { IndustryCard } from "../components/industryCard";
// images
import HeroHome from "../assets/images/hero-home.png";
import Design from "../assets/images/design.svg";
import Host from "../assets/images/host.svg";
import Analyze from "../assets/images/analyze.svg";
import Program from "../assets/images/program.svg";
import Discovery from "../assets/images/discovery.svg";
import Expert from "../assets/images/research-expert.svg";

const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  padding-bottom: 2rem;

  img {
    max-height: 80px;
    max-width: 100px;
  }
`;

const StyledCard = styled(Card)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  padding: 4rem;

  .text-right {
    text-align: right;
  }
`;

export function Home() {
  return (
    <section>
      <Hero
        title="Why SimpleResearch?"
        description="SimpleResearch is driven by the vision that everyone should have
          access to quality insights for better decision making. We’re here to
          make market research and survey use easier, faster, better and
          cheaper."
        grid={true}
        button={"Get Started ->"}
      >
        <img src={HeroHome} />
      </Hero>

      <div className="d-none d-sm-block">
        <IndustryCard />
      </div>

      <Hero
        title="What we do"
        description="SimpleResearch is helps clients and companies design, host and use effective survey projects to get the market insights they need, for better decision making."
        button="Learn more ->"
        buttonOutlined={true}
      >
        <StyledGrid>
          <Card body className="p-2">
            <img src={Design} />
            <h4 className="fw-bold my-3">Design</h4>
            <p className="ff-ws">
              Skills and expertise to craft powerful and intuitive
              questionnaires that generate relevant insights.
            </p>
          </Card>
          <Card body className="p-2">
            <img src={Program} />
            <h4 className="fw-bold my-3">Program</h4>
            <p className="ff-ws">
              We use the best survey hosting platforms to schedule and optimize
              your surveys for top-notch performance in the least amount of
              time.
            </p>
          </Card>
          <Card body className="p-2">
            <img src={Host} />
            <h4 className="fw-bold my-3">Host</h4>
            <p className="ff-ws">
              We’ll host your survey for in our server for you and give you
              complete access to the data you need. You no longer have to spend
              on research tools, contracts and subscriptions.
            </p>
          </Card>
          <Card body className="p-2">
            <img src={Analyze} />
            <h4 className="fw-bold my-3">Analyze</h4>
            <p className="ff-ws">
              Data analyzed and presented in simple, elegant slides,
              easy-to-understand excel reports, or advanced analytics.
            </p>
          </Card>
        </StyledGrid>
      </Hero>

      <div className="d-none d-sm-block">
        <StyledCard>
          <div className="text-right">
            <img src={Discovery} />
          </div>
          <div>
            <h2 className="fw-bold">Discovery survey</h2>
            <p className="ff-ws">
              Our discovery survey helps us better understand your objectives.
              Talk to us about your project and get full cost transparency from
              the get go.
            </p>
            <Button>{"Get a cost estimate ->"}</Button>
          </div>
        </StyledCard>
      </div>

      <Hero
        title="How it works"
        description="Our process is simple, and it all starts with you!"
        button="Learn more ->"
        buttonOutlined={true}
      />

      <div className="d-none d-sm-block">
        <StyledCard>
          <div className="text-right">
            <img src={Expert} />
          </div>
          <div>
            <h2 className="fw-bold">Talk to a research expert</h2>
            <p className="ff-ws">
              Contact SimpleResearch today for a full overview of our expertise
              and methodologies.
            </p>
            <Button>{"Get in touch ->"}</Button>
          </div>
        </StyledCard>
      </div>
    </section>
  );
}
