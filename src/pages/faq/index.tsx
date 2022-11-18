import styled from "styled-components";
// components
import { Hero } from "../../components/hero";
import { ImageCard } from "../../components/imageCard";
import { CollapsedCard } from "../../components/collapsedCard";
// assets
import Discovery from "../../assets/images/discovery.svg";
import Expert from "../../assets/images/research-expert.svg";

const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 2em;

  .question-set {
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin: 2em 0;
  }
`;

export function Faq() {
  return (
    <>
      <Hero
        title="Frequently asked questions"
        description="SimpleResearch is market research made easy and accessible. Take a look at our FAQ to learn more about what we do, how we can partner with you and the research methodologies we use to get the job done!Not sure how to use the right surveys to get the insight you need, when you need it? We’ll design, host and program your surveys so you don’t have to. On top of that, we’ll deliver your insights within 2-3 weeks."
      ></Hero>

      <StyledGrid>
        <section>
          <div className="question-set">
            <h3>Your Project</h3>
            <CollapsedCard
              title="FAQ Article Title"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <CollapsedCard
              title="FAQ Article Title"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <CollapsedCard
              title="FAQ Article Title"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
          </div>
          <div className="question-set">
            <h3>Methodologies</h3>
            <CollapsedCard
              title="FAQ Article Title"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <CollapsedCard
              title="FAQ Article Title"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <CollapsedCard
              title="FAQ Article Title"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
          </div>
          <div className="question-set">
            <h3>Costs & Timelines</h3>
            <CollapsedCard
              title="FAQ Article Title"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <CollapsedCard
              title="FAQ Article Title"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <CollapsedCard
              title="FAQ Article Title"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
          </div>
        </section>
        <aside>
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
        </aside>
      </StyledGrid>
    </>
  );
}
