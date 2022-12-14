import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Card, Badge, Modal } from "react-bootstrap";
import currency from "currency.js";
import { Link } from "react-router-dom";
// assets
import Calculator1 from "../../assets/images/calculator-1.svg";

const StyledCard = styled(Card)`
  padding: 2em;
  .card-title {
    display: flex;
    gap: 2em;
  }

  .summary-list {
    list-style: none;
    padding: 1rem 0;
  }

  .summary-row {
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 1.5em 0;
    border-bottom: 1px solid black;

    h5 {
      font-size: 1em;
    }
  }

  .summary-values {
    align-items: center;
    display: flex;
    justify-content: space-between;

    p {
      margin: 0;
    }
  }

  .cta {
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2em;
  }
`;

const ModalForm = styled.form`
  .inputs {
    display: flex;
    flex-direction: column;

    label {
      margin-top: 1rem;
    }

    input {
      border: 1px solid #e9e6e3;
    }
  }

  .modal-container {
    display: flex;
    flex-direction: column;
    gap: 1em;

    a {
      color: white;
    }
  }
`;

interface props {
  services: string[];
  length: string;
  complexity: string;
  customCoding: boolean;
  surveyResponse: string;
  segmentation: string;
  format: string;
}

export function SummaryCard({
  services,
  length,
  complexity,
  customCoding,
  surveyResponse,
  segmentation,
  format,
}: props) {
  const [lengthValue, setLenegthValue] = useState<number>(0);
  const [complexityValue, setComplexityValue] = useState<number>(0);
  const [codingValue, setCodingValue] = useState<number>(0);
  const [surveyResponseCost, setSurveyResponseCost] = useState<number>(0);
  const [hostFee, setHostFee] = useState<number>(0);
  const [segmentationValue, setSegmentationValue] = useState<number>(2350);
  const [formatValue, setFormatValue] = useState<number>(0);
  const [totalValue, setTotalValue] = useState<number>(0);

  const [show, setShow] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSend = () => {
    setFormSent(true);
  };

  useEffect(() => {
    const { designValue, finalDesignValue } = calculateDesignValue(
      length,
      complexity
    );

    const { programValue, finalProgramValue } = calculateProgramValue(
      length,
      complexity,
      customCoding
    );

    const { hostValue } = calculateHostValue(surveyResponse);
    const { analyzeValue, finalAnalyze } = calculateAnalyzeValue(
      length,
      segmentation,
      format
    );

    setLenegthValue(designValue + programValue + analyzeValue);
    setTotalValue(
      finalDesignValue + finalProgramValue + hostValue + finalAnalyze
    );
  }, [
    services,
    length,
    complexity,
    segmentation,
    format,
    surveyResponse,
    customCoding,
  ]);

  const calculateDesignValue = (length: string, complexity: string) => {
    let value = 0;
    let percentage = 1;

    if (services.includes("Design")) {
      switch (length) {
        case "25":
          value = 1320;
          break;
        case "50":
          value = 1680;
          break;
        case "75":
          value = 2125;
          break;
        case "100":
          value = 2650;
          break;
        case "125":
          value = 3600;
          break;
        case "150":
          value = 4500;
          break;
      }

      if (complexity === "Low") {
        setComplexityValue(-20);
        percentage = 0.8;
      } else if (complexity === "High") {
        setComplexityValue(30);
        percentage = 1.3;
      } else if (complexity === "Medium") {
        setComplexityValue(0);
        percentage = 1;
      }
    }

    const totalValue = value * percentage;
    return { designValue: value, finalDesignValue: totalValue };
  };

  const calculateProgramValue = (
    length: string,
    complexity: string,
    customCoding: boolean
  ) => {
    let value = 0;
    let percentage = 1;
    let codePercentage = 1;

    if (services.includes("Program")) {
      switch (length) {
        case "25":
          value = 650;
          break;
        case "50":
          value = 950;
          break;
        case "75":
          value = 1450;
          break;
        case "100":
          value = 1950;
          break;
        case "125":
          value = 2650;
          break;
        case "150":
          value = 3250;
          break;
      }

      if (complexity === "Low") {
        setComplexityValue(-20);
        percentage = 0.8;
      } else if (complexity === "High") {
        setComplexityValue(30);
        percentage = 1.3;
      } else if (complexity === "Medium") {
        setComplexityValue(0);
        percentage = 1;
      }

      if (customCoding) {
        codePercentage = 1.2;
        setCodingValue(20);
      }
    }

    const totalValue = value * percentage * codePercentage;
    return { programValue: value, finalProgramValue: totalValue };
  };

  const calculateHostValue = (surveyResponse: string) => {
    let fee = 0;
    let totalResponseCost = 0;

    if (services.includes("Host")) {
      fee = 375;
      const responseCost = 0.95;

      totalResponseCost = Number(surveyResponse) * responseCost;
      setSurveyResponseCost(totalResponseCost);
      setHostFee(fee);
    }

    const totalValue = fee + totalResponseCost;
    return { hostValue: totalValue };
  };

  const calculateAnalyzeValue = (
    length: string,
    segmentation: string,
    format: string
  ) => {
    let value = 0;
    let totalSegmentationCost = 0;
    let formatCost = 0;
    setFormatValue(0);

    if (services.includes("Analyze")) {
      switch (length) {
        case "25":
          value = 2350;
          break;
        case "50":
          value = 4350;
          break;
        case "75":
          value = 5400;
          break;
        case "100":
          value = 6500;
          break;
        case "125":
          value = 7550;
          break;
        case "150":
          value = 8650;
          break;
      }

      const responseCost = 7;

      setFormatValue(0);
      if (format === "Your Powerpoint Template") {
        formatCost = value * 0.15;
        setFormatValue(15);
      } else if (format === "Google Slides") {
        formatCost = value * 0.2;
        setFormatValue(20);
      }

      totalSegmentationCost = Number(segmentation) * responseCost;
      setSegmentationValue(totalSegmentationCost);
    }

    const totalValue = value + totalSegmentationCost + formatCost;
    return { analyzeValue: value, finalAnalyze: totalValue };
  };

  return (
    <StyledCard>
      <div className="card-title">
        <img src={Calculator1} />
        <h1>Visualize your survey’s price breakdown</h1>
      </div>

      <ul className="summary-list">
        <li className="summary-row">
          <h5>Survey Services</h5>
          <div>
            {services.map((service) => (
              <Badge bg="light" text="dark">
                {service}
              </Badge>
            ))}
          </div>
        </li>

        <li className="summary-row">
          <h5>Length of Survey</h5>
          <div className="summary-values">
            <p>
              Up to {length} questions ({Number(length) / 5} min)
            </p>
            <p>{currency(lengthValue).format()}</p>
          </div>
        </li>

        <li className="summary-row">
          <h5>Complexity</h5>
          <div className="summary-values">
            <p>{complexity}</p>
            <p>{complexityValue}%</p>
          </div>
        </li>

        <li className="summary-row">
          <h5>Custom Coding</h5>
          <div className="summary-values">
            <p>{customCoding ? "Yes" : "No"}</p>
            <p>{codingValue}%</p>
          </div>
        </li>

        <li className="summary-row">
          <h5>Setup Fee</h5>
          <div className="summary-values">
            <p>{services.includes("Host") ? "One-time fee of $375" : "No"}</p>
            <p>{currency(hostFee).format()}</p>
          </div>
        </li>

        <li className="summary-row">
          <h5>Num. of Survey Responses</h5>
          <div className="summary-values">
            <p>{surveyResponse}</p>
            <p>{currency(surveyResponseCost).format()}</p>
          </div>
        </li>

        <li className="summary-row">
          <h5>Segmentation Add-on</h5>
          <div className="summary-values">
            <p>{segmentation === "0" ? "Aggregate data only" : segmentation}</p>
            <p>{currency(segmentationValue).format()}</p>
          </div>
        </li>

        <li className="summary-row">
          <h5>Report Format</h5>
          <div className="summary-values">
            <p>{services.includes("Analyze") ? format : "-"}</p>
            <p>{formatValue}% </p>
          </div>
        </li>

        <li className="summary-row">
          <h5>Estimated cost</h5>
          <div className="summary-values">
            <p></p>
            <h5>{currency(totalValue).format()}</h5>
          </div>
        </li>
      </ul>

      <div className="cta">
        <p>
          Need further help with your survey? We can help you with everything.
        </p>
        <Button onClick={() => handleShow()}>Let’s get started</Button>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <ModalForm>
            {formSent ? (
              <section className="modal-container">
                <h2>
                  We’ve received your info, feel free to schedule a call to meet
                  a research specialist.
                </h2>
                <Button variant="primary" onClick={handleSend}>
                  <Link to="/calendry"> {"Schedule a call ->"} </Link>
                </Button>
              </section>
            ) : (
              <section className="modal-container">
                <h2>
                  Enter your email, get your survey price breakdown and get
                  started.
                </h2>

                <section className="inputs">
                  <label>Full name</label>
                  <input type="text"></input>
                  <label>Company name</label>
                  <input type="text"></input>
                  <label>Email</label>
                  <input type="text"></input>
                </section>

                <Button variant="primary" onClick={handleSend}>
                  {"Send ->"}
                </Button>
              </section>
            )}
          </ModalForm>
        </Modal.Body>
      </Modal>
    </StyledCard>
  );
}
