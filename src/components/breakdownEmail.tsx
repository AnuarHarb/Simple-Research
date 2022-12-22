import styled from "styled-components";
import { Html } from "@react-email/html";

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
    <Html lang="en">
      <div
        style={{
          marginBottom: "30px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h1>SimpleResearch</h1>
      </div>
      <StyledContent>
        <h4>Hi {user.name}</h4>
        <p>
          Thank you for reaching out to us! We’ll contact you soon as soon as
          possible to follow up on your request! Remember that you can quickly
          schedule a call if you’re in a hurry.
        </p>
        <p>
          Thanks, <br /> The team
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
      <p>
        You’re receiving this email because you estimate your survey’s cost in
        our web page with this output:
      </p>
      <div
        style={{
          border: "1px solid gray",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
        <p>
          <i>{message}</i>
        </p>
        <p>
          <i>
            {user.name}, {user.company}
          </i>
        </p>
      </div>
      <p>© 2022 SimpleResearch, 100 Street, City </p>
    </Html>
  );
}
