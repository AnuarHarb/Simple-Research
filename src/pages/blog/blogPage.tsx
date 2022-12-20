import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getSinglePosts } from "../../utilities/wordpressRequest";
import { Interweave } from "interweave";
import moment from "moment";
import { ImageCard } from "../../components/imageCard";
// assets
import Discovery from "../../assets/images/discovery.svg";
import Expert from "../../assets/images/research-expert.svg";

const StyledPost = styled.section`
  .title-container {
    width: 80%;
    margin-bottom: 2em;
  }

  img {
    border-radius: 8px;
    width: 100%;
  }
`;

const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 2em;

  h2,
  h3 {
    margin: 1em 0 0.5em 0;
  }

  h2 {
    font-size: 1.5em;
  }

  h3 {
    font-size: 1.2em;
  }

  h4 {
    font-size: 1em;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export function BlogPage() {
  const { postId } = useParams();
  const [post, setPost] = useState<any>();

  useEffect(() => {
    if (postId) {
      const getPost = async () => {
        const postResponse = await getSinglePosts(postId);
        console.log("RESP", postResponse);
        setPost(postResponse);
      };
      getPost();
    }
  }, [postId]);

  return (
    <StyledPost>
      {post && (
        <>
          <section className="title-container">
            <p>
              Written on{" "}
              <Interweave
                content={moment(post.date).format(" MMMM DD, yyyy")}
              />
            </p>
            <h1>
              <Interweave content={post.title.rendered} />
            </h1>
            <p>
              by <Interweave content={post._embedded.author[0].name} />
            </p>
            <img src={post._embedded["wp:featuredmedia"][0].source_url} />
          </section>
          <StyledGrid>
            <div>
              <Interweave content={post.content.rendered}></Interweave>
            </div>
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
        </>
      )}
    </StyledPost>
  );
}
