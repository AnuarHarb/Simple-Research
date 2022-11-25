import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Card, Badge } from "react-bootstrap";
import currency from "currency.js";
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

interface props {
  services: string[];
  length: string;
  complexity: string;
  customCoding: boolean;
  fee: boolean;
  surveyResponse: string;
  segmentation: string;
  format: string;
}

export function SummaryCard({
  services,
  length,
  complexity,
  customCoding,
  fee,
  surveyResponse,
  segmentation,
  format,
}: props) {
  const [serviceValue, setServiceValue] = useState<number>();
  const [lengthValue, setLenegthValue] = useState<number>(1320);
  const [complexityValue, setComplexityValue] = useState<number>(1320);
  const [segmentationValue, setSegmentationValue] = useState<number>(2350);
  const [formatValue, setFormatValue] = useState<number>(0);

  useEffect(() => {
    getServiceValue(length);
    getComplexityValue(length, complexity);
    getSegmentationValue(length, segmentation);
    getFormatValue(length, format);
  }, [length, complexity, segmentation, format]);

  const getServiceValue = (length: string) => {
    switch (length) {
      case "25":
        setLenegthValue(1320);
        break;
      case "50":
        setLenegthValue(1680);
        break;
      case "75":
        setLenegthValue(2125);
        break;
      case "100":
        setLenegthValue(2650);
        break;
      case "125":
        setLenegthValue(3600);
        break;
      case "150":
        setLenegthValue(4500);
        break;
    }
  };

  const getComplexityValue = (length: string, complexity: string) => {
    switch (length) {
      case "25":
        if (complexity === "Low") {
          setComplexityValue(550);
        } else if (complexity === "Medium") {
          setComplexityValue(650);
        } else if (complexity === "High") {
          setComplexityValue(950);
        }
        break;
      case "50":
        if (complexity === "Low") {
          setComplexityValue(750);
        } else if (complexity === "Medium") {
          setComplexityValue(950);
        } else if (complexity === "High") {
          setComplexityValue(1650);
        }
        break;
      case "75":
        if (complexity === "Low") {
          setComplexityValue(950);
        } else if (complexity === "Medium") {
          setComplexityValue(1450);
        } else if (complexity === "High") {
          setComplexityValue(2350);
        }
        break;
      case "100":
        if (complexity === "Low") {
          setComplexityValue(1275);
        } else if (complexity === "Medium") {
          setComplexityValue(1950);
        } else if (complexity === "High") {
          setComplexityValue(3150);
        }
        break;
      case "125":
        if (complexity === "Low") {
          setComplexityValue(1650);
        } else if (complexity === "Medium") {
          setComplexityValue(2650);
        } else if (complexity === "High") {
          setComplexityValue(3950);
        }
        break;
      case "150":
        if (complexity === "Low") {
          setComplexityValue(1950);
        } else if (complexity === "Medium") {
          setComplexityValue(3250);
        } else if (complexity === "High") {
          setComplexityValue(4750);
        }
        break;
    }
  };

  const getSegmentationValue = (length: string, segmentation: string) => {
    let initialValue = 0;
    let segmentsValue = 0;

    switch (length) {
      case "25":
        initialValue = 2350;
        if (Number(segmentation) > 4) {
          segmentsValue = 650 * Number(segmentation);
        } else if (Number(segmentation) > 0) {
          segmentsValue = 750 * Number(segmentation);
        }
        break;
      case "50":
        initialValue = 4350;
        if (Number(segmentation) > 4) {
          segmentsValue = 990 * Number(segmentation);
        } else if (Number(segmentation) > 0) {
          segmentsValue = 1150 * Number(segmentation);
        }
        break;
      case "75":
        initialValue = 5400;
        if (Number(segmentation) > 4) {
          segmentsValue = 1200 * Number(segmentation);
        } else if (Number(segmentation) > 0) {
          segmentsValue = 1400 * Number(segmentation);
        }
        break;
      case "100":
        initialValue = 6500;
        if (Number(segmentation) > 4) {
          segmentsValue = 1350 * Number(segmentation);
        } else if (Number(segmentation) > 0) {
          segmentsValue = 1550 * Number(segmentation);
        }
        break;
      case "125":
        initialValue = 7550;
        if (Number(segmentation) > 4) {
          segmentsValue = 1550 * Number(segmentation);
        } else if (Number(segmentation) > 0) {
          segmentsValue = 1800 * Number(segmentation);
        }
        break;
      case "150":
        initialValue = 8650;
        if (Number(segmentation) > 4) {
          segmentsValue = 1700 * Number(segmentation);
        } else if (Number(segmentation) > 0) {
          segmentsValue = 1950 * Number(segmentation);
        }
        break;
    }

    setSegmentationValue(initialValue + segmentsValue);
  };

  const getFormatValue = (length: string, format: string) => {
    switch (length) {
      case "25":
        if (format === "Your Powerpoint Template") {
          setFormatValue(850);
        } else if (format === "Google Slides") {
          setFormatValue(1250);
        } else {
          setFormatValue(0);
        }
        break;
      case "50":
        if (format === "Your Powerpoint Template") {
          setFormatValue(1050);
        } else if (format === "Google Slides") {
          setFormatValue(1550);
        } else {
          setFormatValue(0);
        }
        break;
      case "75":
        if (format === "Your Powerpoint Template") {
          setFormatValue(1350);
        } else if (format === "Google Slides") {
          setFormatValue(2150);
        } else {
          setFormatValue(0);
        }
        break;
      case "100":
        if (format === "Your Powerpoint Template") {
          setFormatValue(1650);
        } else if (format === "Google Slides") {
          setFormatValue(2750);
        } else {
          setFormatValue(0);
        }
        break;
      case "125":
        if (format === "Your Powerpoint Template") {
          setFormatValue(1950);
        } else if (format === "Google Slides") {
          setFormatValue(3350);
        } else {
          setFormatValue(0);
        }
        break;
      case "150":
        if (format === "Your Powerpoint Template") {
          setFormatValue(2250);
        } else if (format === "Google Slides") {
          setFormatValue(3950);
        } else {
          setFormatValue(0);
        }
        break;
    }
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
            <p>{currency(complexityValue).format()}</p>
          </div>
        </li>

        <li className="summary-row">
          <h5>Custom Coding</h5>
          <div className="summary-values">
            <p>{customCoding ? "Yes" : "No"}</p>
            <p>-20%</p>
          </div>
        </li>

        <li className="summary-row">
          <h5>Setup Fee</h5>
          <div className="summary-values">
            <p>{fee ? "One-time fee of $375" : "No"}</p>
            <p>-20%</p>
          </div>
        </li>

        <li className="summary-row">
          <h5>Num. of Survey Responses</h5>
          <div className="summary-values">
            <p>{surveyResponse}</p>
            <p>-20%</p>
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
            <p>{format}</p>
            <p>{currency(formatValue).format()}</p>
          </div>
        </li>

        <li className="summary-row">
          <h5>Estimated cost</h5>
          <div className="summary-values">
            <p></p>
            <h5>
              {currency(
                lengthValue + complexityValue + segmentationValue + formatValue
              ).format()}
            </h5>
          </div>
        </li>
      </ul>

      <div className="cta">
        <p>
          Need further help with your survey? We can help you with everything.
        </p>
        <Button>Let’s get started</Button>
      </div>
    </StyledCard>
  );
}
