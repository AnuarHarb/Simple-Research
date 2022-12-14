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
      "Simple Research is fast, efficient, and cost-effective.  It has allowed us access to powerful insights about Coba’s most important constituent – our customer.  We’ve been delighted with the speed, accuracy, and diligence with which Coba’s survey and research projects have been executed and delivered.",
    name: "Joseph Saliba",
    company: "CEO | Coba",
    image: About6,
  },
  {
    description:
      "The team at Simple Research continues to support my clients in the full spectrum of survey research.  They guide me through research projects with speed and agility - supporting us in everything from survey design and survey programming, to analysis and reporting.  Simple Research makes the survey research process easy – and dare I say enjoyable – translating my clients’ key strategic questions into meaningful, actionable, and customer-centered insights.",
    name: "John Turner",
    company: "SVP | Survey Healthcare Global",
    image: About6,
  },
  {
    description:
      " I love and trust Simple Research because of the speed and responsiveness at which they are able to deliver me the market insight I need. Plus, quality and value are never put second. 100% of engagements have been delivered on time, exactly how I needed them to be which has turned me into a loyal, long-term client. I strongly recommend the entire team at SimpleResearch because of the speed and value of the work they do",
    name: "Aditya Varanasi",
    company: "CEO | Awarity",
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
