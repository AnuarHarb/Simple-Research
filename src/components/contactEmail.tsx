import * as React from "react";
import styled from "styled-components";
import { Html } from "@react-email/html";
import { Button } from "@react-email/button";

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
  message: string;
}

export function ContactEmail(props: props) {
  const { url, user, message } = props;

  return (
    <Html lang="en">
      <div>
        <h1>SimpleResearch</h1>
      </div>
      <StyledContent>
        <h4>Hi {user.name}</h4>
        <p>
          Thank you for reaching out to us! We’ll contact you soon as soon as
          possible to follow up on your request! Remember that you can estimate
          your survey’s cost and quickly schedule a call if you’re in a hurry.
        </p>
        <p>
          Thanks, <br /> The team
        </p>
      </StyledContent>
      <StyledDiv>
        <button>
          <a href={url + "/calculator"}>Estimate costs</a>
        </button>
        <button style={{ backgroundColor: "blue" }}>
          <a href={url + "/calendry"}>Schedule a call</a>
        </button>
      </StyledDiv>
      <p>
        You’re receiving this email because you fill a form in our web page with
        this message:
      </p>
      <i>{message}</i>
      <i>
        {user.name}, {user.company}
      </i>
      <p>© 2022 SimpleResearch, 100 Street, City </p>
    </Html>
  );
}
