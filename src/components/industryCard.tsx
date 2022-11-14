import styled from "styled-components";
import GoogleLogo from "../assets/images/logos/google.svg";
import AmazonLogo from "../assets/images/logos/amazon.svg";
import CapitalLogo from "../assets/images/logos/capital.svg";
import ExpediaLogo from "../assets/images/logos/expedia.svg";
import UberLogo from "../assets/images/logos/uber.svg";
import BoseLogo from "../assets/images/logos/bose.svg";
import AdidasLogo from "../assets/images/logos/adidas.svg";
import DeltaLogo from "../assets/images/logos/delta.svg";

const StyledCard = styled.section`
  .description {
    font-family: workSans;
    font-weight: light;
    font-size: 1.3em;
  }
`;

const StyledGird = styled.div`
  display: flex;
  grid-gap: 1.5em;
  flex-wrap: wrap;
  justify-content: center;
`;

export function IndustryCard() {
  return (
    <StyledCard className="card py-5 px-4 text-center">
      <h1 className="fw-bold">Industries that trust us</h1>
      <p className="description my-3">
        The world’s most successful companies in these industries trust
        SimpleResearch for the market insight they need.
      </p>
      <StyledGird className="my-3">
        <img src={GoogleLogo} />
        <img src={AmazonLogo}></img>
        <img src={CapitalLogo}></img>
        <img src={ExpediaLogo}></img>
        <img src={UberLogo}></img>
        <img src={BoseLogo}></img>
        <img src={AdidasLogo}></img>
        <img src={DeltaLogo}></img>
      </StyledGird>
    </StyledCard>
  );
}
