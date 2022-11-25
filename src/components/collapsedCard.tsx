import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";

interface props {
  title: String;
  description: String;
  description2?: String;
}

const StyledCollaped = styled.article`
  .accordion-button:not(.collapsed) {
    color: black;
    background-color: transparent;
  }
`;

export function CollapsedCard({ title, description, description2 }: props) {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>
          <p>{description}</p>
          {description2 && <p>{description2}</p>}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
