import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";

interface props {
  title: String;
  description: String;
}

const StyledCollaped = styled.article`
  .accordion-button:not(.collapsed) {
    color: black;
    background-color: transparent;
  }
`;

export function CollapsedCard({ title, description }: props) {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>{description}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
