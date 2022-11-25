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

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }

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
              title="Where do I start?"
              description="If you need innovative, actionable, customizable and affordable market research you are already starting in the right place! Simple Research is here to be your full-service research partner and we are happy to help you through every step of the process or just answer a burning question or two."
              description2="To get started with Simple Research today simply use the “Contact Us” button at the top-right of the page and a research expert will contact you to get the ball rolling on connecting your business directly with the opinions of your most important stakeholder… the customer."
            />
            <CollapsedCard
              title="Is there someone I can talk to about my project?"
              description="We would love to talk with you! To contact a Simple Research project specialist simply click on the “Contact Us” box at the top right of this website, fill out the information form and a specialist will reach out to you within 24 hours."
            />
            <CollapsedCard
              title="I have a project that doesn’t cleanly fit into the parameters defined on your website – are you still interested in my project?"
              description="Absolutely! Simple Research utilizes effective, highly customizable research methodologies and tools to meet the needs of any client. We’ve seen it all and are ready to put that experience to work for your business!"
            />
          </div>
          <div className="question-set">
            <h3>Methodologies</h3>
            <CollapsedCard
              title="My business operates in a very niche industry. Is Simple Research still able to help me?"
              description="Simple Research’s analysts and programmers are required to be category agnostic, meaning that we have worked with clients in everything from cosmetics to tech, healthcare to food service and anything you can imagine in-between. There is no niche too specific for Simple Research to help with!"
            />
            <CollapsedCard
              title="I’d like to be directly involved in hearing what my customers have to say about my business. Is that something Simple Research can accommodate?"
              description="We have several qualitative interview methodologies which can allow you to get one-on-one facetime with your consumers or observe while we interview them. Simple Research allows you to be as involved or as detached from the research process as you’d like!"
            />
            <CollapsedCard
              title="My company’s research is highly sensitive, is Simple Research willing to sign an NDA or other required forms to meet my company’s compliance/security requirements?"
              description="Simple Research is willing to sign any forms and/or adjust our research methodologies as necessary to handle sensitive information, topics or customer bases. Additionally we are GDPR certified and are able to share our data retention policy and/or cyber-incident response plan should your company need to review them at the outset of a project."
              description2="If any of these pertain to your company we would love to set up time to call you and talk through how we can handle your situation with the utmost care while still getting your organization the insights it needs!"
            />
            <CollapsedCard
              title="My company operates in a very specific geographic area, does Simple Research have knowledge about my area?"
              description="Our research methodologies are designed to be as broad or as targeted as the client needs them to be. We have the ability to conduct research across several continents or all the way down to your local community!"
            />
            <CollapsedCard
              title="What capacity does Simple Research have?"
              description="Simple Research has resources operating in 6 countries, on 3 continents, across a dozen time zones. We have conducted research in 38 countries utilizing 20+ languages for nearly every industry imaginable. There is no market research ask that Simple Research cannot handle!"
            />
          </div>
          <div className="question-set">
            <h3>Costs & Timelines</h3>
            <CollapsedCard
              title="How long can I expect my project with Simple Research to take?"
              description="Project timelines are dependent on the scope and complexity of a project and can be as short as 24 hours or as long as several weeks. Rest assured we will agree to timeline at the beginning of a project so that you will know when we can have the services you require completed!"
            />
            <CollapsedCard
              title="How much do research services from Market Research cost?"
              description="Costs vary by project, but to begin to get a sense of cost you can utilize our “menu” of services on the home page (Program My Survey, Analyze My Survey Data, etc.) within each menu item is a cost estimator that can help you understand how different variables effect draft project costs."
            />
          </div>
        </section>
        <aside>
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
        </aside>
      </StyledGrid>
    </>
  );
}
