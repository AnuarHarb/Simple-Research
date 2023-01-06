import styled from "styled-components";
import { Html } from "@react-email/html";
import currency from "currency.js";

const StyledContent = styled.div`
  margin: 8em 0;
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 1em;
  margin: 1em 0;
`;

interface props {
  url: string;
  user: {
    name: string;
    email: string;
    company: string;
  };
  message: any;
}

export function BreakdownEmail(props: props) {
  const { url, user, message } = props;

  return (
    <Html lang="en"  
          style={{
            backgroundColor: "#F3F3F3"
          }}
    >
      <div
        style={{
          marginBottom: "30px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h2>SimpleResearch</h2>
      </div>
      <h1>Here’s your survey price breakdown.</h1>
      <StyledContent>
        <h4>Dear {user.name},</h4>
        <p>
         Here’s your survey price breakdown! Let us know if this fits your needs. Feel free to schedule a call, send an email or wait until we reach out to you to follow up. 
        </p>
        <p>
          Best, <br /> The team
        </p>
      </StyledContent>
      <StyledDiv>
        <button
          style={{
            backgroundColor: "white",
            color: "blue",
            padding: "5px 15px",
            marginRight: "6px",
            boxShadow: "none",
            textDecoration: "none",
            border: "1px solid blue",
            borderRadius: "40px",
          }}
        >
          <a
            href={url + "/calculator"}
            style={{
              textDecoration: "none",
            }}
          >
            Estimate costs
          </a>
        </button>
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "5px 15px",
            marginLeft: "6px",
            boxShadow: "none",
            textDecoration: "none",
            border: "1px solid blue",
            borderRadius: "40px",
          }}
        >
          <a
            href={url + "/calendry"}
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Schedule a call
          </a>
        </button>
      </StyledDiv>

      <div
        style={{
          border: "1px solid gray",
          padding: "15px",
          margin: "16px 0",
          borderRadius: "8px",
          display: "inline-block",
        }}
      >
        <table>
          <tr>
            <th>Service</th>
            <th>Details</th>
            <th>Cost</th>
          </tr>
          <tr>
            <td>Services</td>
            <td style={{textAlign: "center"}}>{message.services.toString()}</td>
          </tr>
          <tr>
            <td>Length of survey</td>
            <td style={{textAlign: "center"}}>{message.length}</td>
            <td style={{textAlign: "right"}}>{currency(message.lengthValue).format()}</td>
          </tr>
          <tr>
            <td>Complexity</td>
            <td style={{textAlign: "center"}}>{message.complexity}</td>
            <td style={{textAlign: "right"}}>{message.complexityValue}%</td>
          </tr>

          {message.services.includes("Program") &&
            <tr>
              <td>Custom coding</td>
              <td style={{textAlign: "center"}}>{message.customCoding}</td>
              <td style={{textAlign: "right"}}>{message.codingValue}%</td>
            </tr>
          }

          {message.services.includes("Host") && 
            <tr>
              <td>Setup fee</td>
              <td style={{textAlign: "center"}}>One-time fee of $375</td>
              <td style={{textAlign: "right"}}>{currency(375).format()}</td>
            </tr>
          }

          {message.services.includes("Host") && 
            <tr>
              <td>Num. of survey responses</td>
              <td style={{textAlign: "center"}}>{message.surveyResponse}</td>
              <td style={{textAlign: "right"}}>{currency(message.surveyResponseCost).format()}</td>
            </tr>
          }

          {message.services.includes("Analyze") && 
            <tr>
              <td>Segmentation add-on</td>
              <td style={{textAlign: "center"}}>{message.segmentation}</td>
              <td style={{textAlign: "right"}}>{currency(message.segmentationValue).format()}</td>
            </tr>
          }

          {message.services.includes("Analyze") &&
            <tr>
              <td>Report format</td>
              <td style={{textAlign: "center"}}>{message.format}</td>
              <td style={{textAlign: "right"}}>{currency(message.formatValue).format()}</td>
            </tr>
          }
          <tr>
            <td>Estimated cost</td>
            <td style={{textAlign: "center"}}><b>Total</b></td>
            <td style={{textAlign: "right"}}><b>{currency(message.totalValue).format()}</b></td>
          </tr>
        </table>
        <p>
          <i>
            {user.name}, {user.company}
          </i>
        </p>
      </div>
      <p>© 2022 SimpleResearch</p>
    </Html>
  );
}
