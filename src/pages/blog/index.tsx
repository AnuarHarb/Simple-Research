import { useState, useEffect } from "react";
import styled from "styled-components";
import { getPosts } from "../../utilities/wordpressRequest";
import { Hero } from "../../components/hero";
import { ImageCard } from "../../components/imageCard";
import { BlogCard } from "../../components/blogCard";
// assets
import Discovery from "../../assets/images/discovery.png";
import Expert from "../../assets/images/expert.png";
import { Outlet } from "react-router-dom";

const HighlightPost = styled.section`
  @media (max-width: 576px) {
    display: none;
  }
`;

const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: 5fr 2fr;
  grid-gap: 2em;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    .highlight-post {
      display: none;
    }
  }

  .post-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2em;
    list-style: none;
    padding: 0;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    img {
      width: 100%;
    }
  }
`;

export function Blog() {
  const [posts, setPosts] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const postsResponse = async () => {
    setLoading(true);
    const postResponse = await getPosts(1);
    console.log(postResponse);
    setLoading(false);
    setPosts(postResponse);
  };

  useEffect(() => {
    postsResponse();
  }, []);

  return (
    <section>
      <Outlet />

      <Hero
        title="Blog"
        description="Check out our blog for the latest tips, tricks, and happenings in the world of market research. Read more about current topics like survey fatigue, quality of response, best practice and how-to’s. "
      ></Hero>

      <HighlightPost>
        {loading ? (
          <p>loading posts...</p>
        ) : (
          posts.length && <BlogCard post={posts[0]} highlight />
        )}
      </HighlightPost>

      <StyledGrid>
        <ul className="post-list">
          {posts.map((post: any) => (
            <li key={post.id}>
              <BlogCard post={post} vertical />
            </li>
          ))}
        </ul>
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
    </section>
  );
}
