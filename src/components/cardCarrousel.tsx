import { Carousel } from "react-bootstrap";
import { IndustryCard } from "./industryCard";
import { ImageCard } from "./imageCard";
// assets
import GoogleLogo from "../assets/images/logos/google.svg";
import AmazonLogo from "../assets/images/logos/amazon.svg";
import InstagramLogo from "../assets/images/logos/instagram.svg";
import FacebookLogo from "../assets/images/logos/facebook.svg";
import QuialiticsLogo from "../assets/images/logos/quialitics.svg";
import SvpLogo from "../assets/images/logos/svp.svg";

import LendingLogo from "../assets/images/logos/lending.svg";
import WellsLogo from "../assets/images/logos/wells.svg";
import GoldenLogo from "../assets/images/logos/golden.svg";
import CapitalLogo from "../assets/images/logos/capital.svg";
import FarmersLogo from "../assets/images/logos/farmers.svg";
import charlesLogo from "../assets/images/logos/charles.svg";
import extradeLogo from "../assets/images/logos/extrade.svg";

import fritoLogo from "../assets/images/logos/frito.svg";
import smukersLogo from "../assets/images/logos/smukers.svg";
import millsLogo from "../assets/images/logos/mills.svg";
import foodLogo from "../assets/images/logos/food.svg";
import redbullLogo from "../assets/images/logos/redbull.svg";
import wineLogo from "../assets/images/logos/wine.svg";
import michelinLogo from "../assets/images/logos/michelin.svg";

import pandaLogo from "../assets/images/logos/panda.svg";
import pizzaLogo from "../assets/images/logos/pizza.svg";
import tommyLogo from "../assets/images/logos/tommy.svg";
import BoseLogo from "../assets/images/logos/bose.svg";
import oldnavyLogo from "../assets/images/logos/oldnavy.svg";
import AddidasLogo from "../assets/images/logos/adidas.svg";
import barklyLogo from "../assets/images/logos/barkly.svg";

import UberLogo from "../assets/images/logos/uber.svg";
import vikingLogo from "../assets/images/logos/viking.svg";
import ExpediaLogo from "../assets/images/logos/expedia.svg";
import carnivalLogo from "../assets/images/logos/carnival.svg";
import hiltonLogo from "../assets/images/logos/hilton.svg";
import deltaLogo from "../assets/images/logos/delta.svg";

import texasLogo from "../assets/images/logos/texas.svg";
import meritusLogo from "../assets/images/logos/meritus.svg";
import centralLogo from "../assets/images/logos/central.svg";
import blueLogo from "../assets/images/logos/blue.svg";
import aspireLogo from "../assets/images/logos/aspire.svg";

import About6 from "../assets/images/about-6.svg";

const industryLogos = [
  GoogleLogo,
  InstagramLogo,
  AmazonLogo,
  QuialiticsLogo,
  FacebookLogo,
  SvpLogo,
];

const DigitalLogos = [
  GoogleLogo,
  InstagramLogo,
  AmazonLogo,
  QuialiticsLogo,
  FacebookLogo,
  SvpLogo,
];

const FinancialLogos = [
  LendingLogo,
  WellsLogo,
  CapitalLogo,
  GoldenLogo,
  FarmersLogo,
  charlesLogo,
  extradeLogo,
];

const CPGLogos = [
  fritoLogo,
  smukersLogo,
  millsLogo,
  foodLogo,
  redbullLogo,
  wineLogo,
  michelinLogo,
];

const RetailLogos = [
  pandaLogo,
  pizzaLogo,
  tommyLogo,
  BoseLogo,
  oldnavyLogo,
  AddidasLogo,
  barklyLogo,
];

const HospitalityLogos = [
  UberLogo,
  vikingLogo,
  ExpediaLogo,
  carnivalLogo,
  hiltonLogo,
  deltaLogo,
];

const HealthLogos = [texasLogo, meritusLogo, centralLogo, blueLogo, aspireLogo];

interface props {
  type: string;
}

const industries = [
  {
    title: "Digital",
    description:
      "These clients fine-tuned their online offerings and converted their digital customers into engaged enthusiasts with our consumer research and insights.",
    logos: DigitalLogos,
  },
  {
    title: "Financial",
    description:
      "These companies use Simple Research to get informed investment decisions, generate operational insights for portfolio companies, and study consumer perceptions, behaviors, and trends.",
    logos: FinancialLogos,
  },
  {
    title: "CPG",
    description:
      "Our consumer product and services clients leverage consumer research and insights to highlight product and service opportunities, test marketing stimuli, and understand competitive positioning.",
    logos: CPGLogos,
  },
  {
    title: "Restaurant / Retail",
    description:
      "These customers are able to discover better product and service opportunities while strongly positioning themselves with our consumer research and insights.",
    logos: RetailLogos,
  },
  {
    title: "Hospitality",
    description:
      "Our hotel and hospitality clients leverage consumer research and insights to track guest feedback, identify service opportunity areas, and hone service offerings to ensure they are competitive and differentiated.",
    logos: HospitalityLogos,
  },
  {
    title: "Healthcare",
    description:
      "Healthcare clients we work with leverage consumer research and insights to track patient satisfaction and feedback, highlight service opportunities, understand competitive positioning, and test new patient service models.",
    logos: HealthLogos,
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
    <>
      <h2 style={{ textAlign: "center", margin: "1em 0" }}>
        {type === "industries"
          ? "Companies that trust us"
          : "Client Testimonisl"}
      </h2>

      <Carousel variant="dark">
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
              <ImageCard key={index} description={card.description}>
                <div className="avatar text-right">
                  <img src={card.image} style={{ maxWidth: "150px" }} />
                  <div>
                    <h5>{card.name}</h5>
                    <p>{card.company}</p>
                  </div>
                </div>
              </ImageCard>
            </Carousel.Item>
          ))}
      </Carousel>
    </>
  );
}
