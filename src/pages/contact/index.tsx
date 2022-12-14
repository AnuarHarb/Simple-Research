import { useState } from "react";
import styled from "styled-components";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
// components
import { Hero } from "../../components/hero";
import { ImageCard } from "../../components/imageCard";
import { sendEmail } from "../../components/emailSender";
// assets
import Discovery from "../../assets/images/discovery.png";
import Expert from "../../assets/images/expert.png";

const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 2em;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }

  .inner-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    margin: 2em 0;

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }

  header {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 1em;

    label {
      margin-top: 1rem;
    }

    input {
      border: 1px solid #e9e6e3;
    }
  }
`;

const ModalForm = styled.form`
  .inputs {
    display: flex;
    flex-direction: column;

    label {
      margin-top: 1rem;
    }

    input {
      border: 1px solid #e9e6e3;
    }
  }

  .modal-container {
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 3em;

    a {
      color: white;
    }
  }
`;

export function Contact() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [interest, setInterest] = useState<string[]>([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSend = () => {
    sendEmail({ user: { name, email, company }, message, interest });
    handleShow();
  };

  const updateInterest = (value: string) => {
    const newArray = [...interest]
    const index = newArray.indexOf(value);
    if (index === -1) {
      newArray.push(value); 
    } else {
      newArray.splice(index,1);
    }
    setInterest(newArray)
  }

  return (
    <>
      <Hero
        title="Let???s work together"
        description="Make your next survey project easier, faster, better, and cheaper with SimpleResearch."
        descriptionDecorator={
          <p className="desciption">
            SimpleResearch is helping thousands of clients design and use
            effective survey projects to get the insights they need, for better
            decision making.
          </p>
        }
      ></Hero>

      <StyledGrid>
        <section>
          <h5>Survey services</h5>
          <p>Select the service(s) you need.</p>
          <section className="inner-grid">
            <div>
              <header>
                <input type="checkbox" onChange={(event) => updateInterest('Design')}/>
                Design
              </header>
              <p>
                Skills and expertise to craft powerful and intuitive
                questionnaires that generate relevant insights.
              </p>
            </div>
            <div>
              <header>
                <input type="checkbox" onChange={(event) => updateInterest('Program')}/>
                Program
              </header>
              <p>
                We use Qualtrics, Decipher, Survey Monkey, and a multitude of
                other best-in-class survey hosting platforms to schedule and
                optimize your surveys for top-notch performance in the least
                amount of time.
              </p>
            </div>
            <div>
              <header>
                <input type="checkbox" onChange={(event) => updateInterest('Host')}/>
                Host
              </header>
              <p>
                We???ll host your survey for in our server for you and give you
                complete access to the data you need. You no longer have to
                spend on research tools, contracts and subscriptions.
              </p>
            </div>
            <div>
              <header>
                <input type="checkbox" onChange={(event) => updateInterest('Analyze')}/>
                Analyze
              </header>
              <p>
                Data analyzed and presented in simple, elegant slides,
                easy-to-understand excel reports, or advanced analytics.
              </p>
            </div>
            <div>
              <header>
                <input type="checkbox" onChange={(event) => updateInterest('Not sure')}/>
                I???m not sureI???m not sure
              </header>
              <p>
                 But I???m interested in starting a conversation with a research professional
              </p>
            </div>
          </section>

          <section className="inputs">
            <label>Full name</label>
            <input
              type="text"
              onChange={(event) => setName(event.target.value)}
            ></input>
            <label>Company name</label>
            <input
              type="text"
              onChange={(event) => setCompany(event.target.value)}
            ></input>
            <label>Email</label>
            <input
              type="text"
              onChange={(event) => setEmail(event.target.value)}
            ></input>
            <label>How can we help you? (optional)</label>
            <input
              type="text"
              onChange={(event) => setMessage(event.target.value)}
            ></input>
            <Button className="rounded-pill" onClick={handleSend}>
              {"Send message ->"}
            </Button>
          </section>
        </section>

        <aside>
          <ImageCard
            vertical
            title="Discovery survey"
            description="Our discovery survey helps us better understand your objectives. Talk to us about your project and get full cost transparency from the get go."
            cta="Get a cost estimate ->"
            ctaLink="/calculator"
          >
            <div className="avatar text-right">
              <img src={Discovery} />
            </div>
          </ImageCard>
          <ImageCard
            vertical
            title="Talk to a research expert"
            description="Contact SimpleResearch today for a full overview of our expertise and methodologies."
            cta="Get in touch ->"
            ctaLink="/calendry"
          >
            <div className="avatar text-right">
              <img src={Expert} />
            </div>
          </ImageCard>
        </aside>
      </StyledGrid>

      <Modal show={show} onHide={handleClose} centered closeButton>
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
          <ModalForm>
            <section className="modal-container">
              <h2>
                We???ve received your info, feel free to schedule a call to meet a
                research specialist.
              </h2>
              <Button
                className="rounded-pill"
                variant="primary"
                onClick={handleSend}
              >
                <Link to="/calendry"> {"Schedule a call ->"} </Link>
              </Button>
            </section>
          </ModalForm>
        </Modal.Body>
      </Modal>
    </>
  );
}
