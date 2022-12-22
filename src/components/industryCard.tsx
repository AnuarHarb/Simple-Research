import styled from "styled-components";

const StyledCard = styled.section`
  min-height: 320px;
  .description {
    font-family: workSans;
    font-weight: light;
    font-size: 1.3em;
  }
`;

const StyledGrid = styled.div`
  display: flex;
  grid-gap: 1.5em;
  flex-wrap: wrap;
  justify-content: center;
`;

interface props {
  title: string;
  description: string;
  logos: string[];
}

export function IndustryCard({ title, description, logos }: props) {
  return (
    <StyledCard className="card py-5 px-4 text-center">
      <h1 className="fw-bold">{title}</h1>
      <p className="description my-3">{description}</p>
      <StyledGrid className="my-3">
        {logos.map((logo, index) => (
          <img key={index} src={logo} />
        ))}
      </StyledGrid>
    </StyledCard>
  );
}
