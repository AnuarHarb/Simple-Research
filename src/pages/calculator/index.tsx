import styled from "styled-components";
import { Button, Card } from "react-bootstrap";

const StyledPage = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
`;

const StyledCard = styled(Card)`
  .description {
    font-family: workSans;
    font-weight: light;
    font-size: 1.3em;
  }
`;

const StyledGrid = styled.section`
  .inner-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    margin: 2em 0;
  }

  header {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }
`;

export function Calculator() {
  return (
    <StyledPage>
      <StyledCard>
        <h1>Visualize your survey’s price breakdown</h1>
      </StyledCard>
      <aside>
        <StyledGrid>
          <section>
            <h5>Survey services</h5>
            <p>Select the service(s) you need.</p>
            <section className="inner-grid">
              <div>
                <header>
                  <input type="checkbox" />
                  Design
                </header>
                <p>
                  Skills and expertise to craft powerful and intuitive
                  questionnaires that generate relevant insights.
                </p>
              </div>
              <div>
                <header>
                  <input type="checkbox" />
                  Program
                </header>
                <p>
                  We use Qualtrics, Decipher, Survey Monkey, and a multitude of
                  other best-in-class survey hosting platforms to schedule and
                  optimize your surveys for top-notch performance in the least
                  amount of time.
                </p>
              </div>
              <div>
                <header>
                  <input type="checkbox" />
                  Host
                </header>
                <p>
                  We’ll host your survey for in our server for you and give you
                  complete access to the data you need. You no longer have to
                  spend on research tools, contracts and subscriptions.
                </p>
              </div>
              <div>
                <header>
                  <input type="checkbox" />
                  Analyze
                </header>
                <p>
                  Data analyzed and presented in simple, elegant slides,
                  easy-to-understand excel reports, or advanced analytics.
                </p>
              </div>
            </section>
          </section>
        </StyledGrid>
      </aside>
    </StyledPage>
  );
}
