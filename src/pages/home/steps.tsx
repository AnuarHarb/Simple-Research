import styled from "styled-components";
import step1 from "../../assets/icons/step1.svg";
import step2 from "../../assets/icons/step2.svg";
import step3 from "../../assets/icons/step3.svg";
import step4 from "../../assets/icons/step4.svg";
import step5 from "../../assets/icons/step5.svg";

const StyleSteps = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, 160px);

  .step-container {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    padding: 1em 2rem;
    position: relative;

    :nth-child(2n + 1) {
      border-right: 1px solid black;
      .step-number {
        right: -24px;
      }
    }

    :nth-child(2n) {
      border-left: 1px solid black;
      .step-number {
        left: -24px;
      }
    }

    :last-child {
      border-right: none;
    }
  }

  .step-number {
    border-radius: 100%;
    width: 46px;
    height: 46px;
    background-color: #0141ff;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    z-index: 2;
  }

  .step-icon {
    width: 24px;
  }

  .step-title {
    font-size: 1.2em;
    font-weight: bold;
  }

  .step-description {
  }

  .step-action {
    border: none;
    background-color: transparent;
    box-shadow: none;
    cursor: pointer;
    z-index: 2;
    font-weight: bold;
    :hover {
      text-decoration: underline;
    }
  }
`;

export function Steps() {
  return (
    <StyleSteps>
      <article className="step-container">
        <div className="step-number">1</div>
        <img className="step-icon" src={step1} />
        <h4 className="step-title">Complete the discovery survey</h4>
        <p className="step-description">
          It only takes a minute to fill out our discovery survey, tell us more
          about your project and get a cost estimate.
        </p>
        <button className="step-action">{"Call to action ->"}</button>
      </article>

      <article className="step-container"></article>
      <article className="step-container"></article>

      <article className="step-container">
        <div className="step-number">2</div>
        <img className="step-icon" src={step2} />
        <h4 className="step-title">Talk to our experts</h4>
        <p className="step-description">
          Our team of experts will follow up with you soon afterwards to
          schedule a call. You can also reach out to them directly.
        </p>
        <button className="step-action">{"Call to action ->"}</button>
      </article>

      <article className="step-container">
        <div className="step-number">3</div>
        <img className="step-icon" src={step3} />
        <h4 className="step-title">Project development</h4>
        <p className="step-description">
          The team at SimpleResearch will prepare and manage your custom project
          using the best-in-class market research tools available.
        </p>
      </article>

      <article className="step-container"></article>
      <article className="step-container"></article>

      <article className="step-container">
        <div className="step-number">4</div>
        <img className="step-icon" src={step4} />
        <h4 className="step-title">Market research</h4>
        <p className="step-description">
          We gather your market insight through survey design, hosting,
          programming and analysis.
        </p>
      </article>

      <article className="step-container">
        <div className="step-number">5</div>
        <img className="step-icon" src={step5} />
        <h4 className="step-title">Delivery</h4>
        <p className="step-description">
          You get your insight at lightning speed so you can make better, more
          informed decisions at the right time.
        </p>
      </article>
    </StyleSteps>
  );
}
