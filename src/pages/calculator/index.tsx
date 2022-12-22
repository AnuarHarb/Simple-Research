import { useState, useEffect } from "react";
import styled from "styled-components";
import { Form } from "react-bootstrap";
// components
import { SummaryCard } from "./summaryCard";

const StyledPage = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;

    aside {
      grid-row: 1/2;
    }
  }
`;

const StyledGrid = styled.section`
  .inner-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    margin: 2em 0;

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }

  header {
    display: flex;
    gap: 1rem;
    margin-bottom: 0.5rem;
  }

  .form-section {
    margin: 2em 0;
  }

  .form-list {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
`;

export function Calculator() {
  const [services, setServices] = useState<string[]>([]);
  const [length, setLength] = useState<string>("25");
  const [complexity, setComplexity] = useState<string>("Low");
  const [customCoding, setCustomCoding] = useState<boolean>(false);
  const [surveyResponse, setSurveyResponse] = useState<string>("");
  const [segmentation, setSegmentation] = useState<string>("0");
  const [format, setFormat] = useState<string>(
    "Simple Research (Editable Powerpoint)"
  );

  const [showDesign, setShowDesign] = useState<boolean>(true);
  const [showHost, setShowHost] = useState<boolean>(false);
  const [showProgram, setShowProgram] = useState<boolean>(false);
  const [showAnalyze, setShowAnalyze] = useState<boolean>(false);

  const handleServices = (service: string) => {
    if (services.includes(service)) {
      const newArray = services.filter((i) => i !== service);
      setServices(newArray);
    } else {
      setServices([...services, service]);
    }
  };

  useEffect(() => {
    setShowDesign(false);
    setShowAnalyze(false);
    setShowHost(false);
    setShowProgram(false);
    if (services.includes("Design")) {
      setShowDesign(true);
    }

    if (services.includes("Host")) {
      setShowHost(true);
    }

    if (services.includes("Program")) {
      setShowProgram(true);
    }

    if (services.includes("Analyze")) {
      setShowAnalyze(true);
    }
  }, [services]);

  return (
    <StyledPage>
      <aside>
        <StyledGrid>
          <section className="form-section">
            <h5>Survey services</h5>
            <p>Select the service(s) you need.</p>
            <section className="inner-grid">
              <div>
                <header>
                  <input
                    type="checkbox"
                    onClick={() => handleServices("Design")}
                  />
                  Design
                </header>
                <p>
                  Skills and expertise to craft powerful and intuitive
                  questionnaires that generate relevant insights.
                </p>
              </div>
              <div>
                <header>
                  <input
                    type="checkbox"
                    onClick={() => handleServices("Program")}
                  />
                  Program
                </header>
                <p>
                  Qualtrics, Decipher, Survey Monkey, or a multitude of other
                  survey hosting platforms.
                </p>
              </div>
              <div>
                <header>
                  <input
                    type="checkbox"
                    onClick={() => handleServices("Host")}
                  />
                  Host
                </header>
                <p>
                  Host my surview in your server and give me access to the data.
                </p>
              </div>
              <div>
                <header>
                  <input
                    type="checkbox"
                    onClick={() => handleServices("Analyze")}
                  />
                  Analyze
                </header>
                <p>
                  Data analyzed and presented in simple, elegant slides,
                  easy-to-understand excel reports, or advanced analytics.
                </p>
              </div>
            </section>
          </section>

          <section className="form-section">
            <h5>Length of survey</h5>
            <p>
              Length is measured in minutes and number of questions in your
              survey
            </p>
            <Form.Select
              onChange={(event) => {
                setLength(event.currentTarget.value);
              }}
            >
              <option value="25">Up to 25 questions (5 min)</option>
              <option value="50">Up to 50 questions (10 min)</option>
              <option value="75">Up to 75 questions (15 min)</option>
              <option value="100">Up to 100 questions (20 min)</option>
              <option value="125">Up to 125 questions (25 min)</option>
              <option value="150">Up to 150 questions (30 min)</option>
            </Form.Select>
          </section>

          {(showDesign || showProgram) && (
            <section className="form-section">
              <h5>Complexity</h5>
              <p>
                Provide us an estimate of how complex you think your survey will
                be.
              </p>
              <Form.Select
                onChange={(event) => {
                  setComplexity(event.currentTarget.value);
                }}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </Form.Select>
              {complexity === "Low" && (
                <p>My survey only needs a simple flow and display </p>
              )}

              {complexity === "Medium" && (
                <p>
                  My survey needs some branching, display logic, and multimedia
                </p>
              )}

              {complexity === "High" && (
                <p>
                  My survey requires all of the above and/or display logic, skip
                  logic, piped text, and/or advanced analytics like conjoint and
                  maxdiff
                </p>
              )}
            </section>
          )}

          {showProgram && (
            <section className="form-section">
              <h5>Custom Coding</h5>
              <p>
                Does your survey require “back-end” advanced programming to
                develop custom survey questions, graphics, and skins?
              </p>
              <Form.Check
                type="switch"
                label={customCoding ? "Yes" : "No"}
                onChange={() => setCustomCoding(!customCoding)}
              />
            </section>
          )}

          {showHost && (
            <section className="form-section">
              <h5>Estimated number of Survey Responses</h5>
              <p>
                If you need data hosting, select how many survey responses you
                estimate to recieve.
              </p>
              <Form.Control
                type="number"
                onChange={(event) =>
                  setSurveyResponse(event.currentTarget.value)
                }
              />
            </section>
          )}

          {showAnalyze && (
            <section className="form-section">
              <h5>Segmentation Add-on</h5>
              <p>
                How many segments would you like included in your report? (Each
                segment can include up to 6 variables.)
              </p>
              <Form.Control
                type="number"
                onChange={(event) => setSegmentation(event.currentTarget.value)}
              />
            </section>
          )}

          {showAnalyze && (
            <section className="form-section">
              <h5>Report Format</h5>
              <p>In what format would you like the report delivered?</p>
              <div className="form-list">
                <Form.Check
                  inline
                  label="Simple Research (Editable Powerpoint)"
                  name="group1"
                  type="radio"
                  id={`inline-radio-1`}
                  onClick={() =>
                    setFormat("Simple Research (Editable Powerpoint)")
                  }
                />
                <Form.Check
                  inline
                  label="Your Powerpoint Template"
                  name="group1"
                  type="radio"
                  id={`inline-radio-2`}
                  onClick={() => setFormat("Your Powerpoint Template")}
                />
                <Form.Check
                  inline
                  label="Google Slides"
                  name="group1"
                  type="radio"
                  id={`inline-radio-3`}
                  onClick={() => setFormat("Google Slides")}
                />
              </div>
            </section>
          )}
        </StyledGrid>
      </aside>

      <div className="survey-card">
        <SummaryCard
          services={services}
          length={length}
          complexity={complexity}
          customCoding={customCoding}
          surveyResponse={surveyResponse}
          segmentation={segmentation}
          format={format}
        />
      </div>
    </StyledPage>
  );
}
