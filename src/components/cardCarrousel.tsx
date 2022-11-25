import { Carousel } from "react-bootstrap";
import { IndustryCard } from "./industryCard";
import { ImageCard } from "./imageCard";
// assets
import GoogleLogo from "../assets/images/logos/google.svg";
import AmazonLogo from "../assets/images/logos/amazon.svg";
import CapitalLogo from "../assets/images/logos/capital.svg";
import ExpediaLogo from "../assets/images/logos/expedia.svg";
import UberLogo from "../assets/images/logos/uber.svg";
import BoseLogo from "../assets/images/logos/bose.svg";
import AdidasLogo from "../assets/images/logos/adidas.svg";
import DeltaLogo from "../assets/images/logos/delta.svg";

import About6 from "../assets/images/about-6.svg";

const industryLogos = [
  GoogleLogo,
  AmazonLogo,
  CapitalLogo,
  ExpediaLogo,
  UberLogo,
  BoseLogo,
  AdidasLogo,
  DeltaLogo,
];

interface props {
  type: string;
}

const industries = [
  {
    title: "Industries that trust us",
    description:
      "The world’s most successful companies in these industries trust SimpleResearch for the market insight they need.",
    logos: industryLogos,
  },
  {
    title: "Digital",
    description: "What type of problem did we help them to solve",
    logos: industryLogos,
  },
  {
    title: "Financial",
    description: "What type of problem did we help them to solve",
    logos: industryLogos,
  },
  {
    title: "CPG",
    description: "What type of problem did we help them to solve",
    logos: industryLogos,
  },
  {
    title: "Restaurant / Retail",
    description: "What type of problem did we help them to solve",
    logos: industryLogos,
  },
  {
    title: "Hospitality",
    description: "What type of problem did we help them to solve",
    logos: industryLogos,
  },
  {
    title: "Healthcare",
    description: "What type of problem did we help them to solve",
    logos: industryLogos,
  },
];

const testimonials = [
  {
    description:
      "My favorite thing about working with SimpleResearch is that the company truly lives by its values. It makes for a fun, inclusive, inspiring work environment where people feel comfortable bringing their own perspective and ideas to work.",
    name: "Full Name",
    company: "Company Name",
    image: About6,
  },
  {
    description:
      "My favorite thing about working with SimpleResearch is that the company truly lives by its values. It makes for a fun, inclusive, inspiring work environment where people feel comfortable bringing their own perspective and ideas to work.",
    name: "Full Name",
    company: "Company Name",
    image: About6,
  },
];

export function CardCarrousel({ type }: props) {
  return (
    <Carousel>
      {type === "industries" &&
        industries.map((card, index) => (
          <Carousel.Item key={index}>
            <IndustryCard
              title={card.title}
              description={card.description}
              logos={card.logos}
            />
          </Carousel.Item>
        ))}

      {type === "studys" &&
        industries.map((card, index) => (
          <Carousel.Item key={index}>
            <IndustryCard
              title={card.title}
              description={card.description}
              logos={card.logos}
            />
          </Carousel.Item>
        ))}

      {type === "testimonial" &&
        testimonials.map((card, index) => (
          <Carousel.Item key={index}>
            <ImageCard
              key={index}
              title="Client testimonials"
              description={card.description}
            >
              <div className="avatar text-right">
                <img src={card.image} />
                <div>
                  <h5>{card.name}</h5>
                  <p>{card.company}</p>
                </div>
              </div>
            </ImageCard>
          </Carousel.Item>
        ))}
    </Carousel>
  );
}
