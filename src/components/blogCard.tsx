import styled from "styled-components";
import { Interweave } from "interweave";

interface StyleProps {
  vertical?: boolean;
}

const StyledPost = styled.article<StyleProps>`
  display: grid;
  grid-template-columns: ${(p) => (p.vertical ? "1fr" : "1fr 1fr")};
  grid-gap: 1em;
  margin: 1em 0;
  align-items: center;

  .image-conteinr {
    width: 100%;

    img {
      width: 100%;
    }
  }

  a {
    color: black;
    text-decoration: none;
    display: flex;
    flex-direction: column;

    &:hover {
      text-decoration: underline;
    }
  }
`;

interface Props {
  post: any;
  vertical?: boolean;
}

export function BlogCard({ post, vertical }: Props) {
  return (
    <StyledPost vertical={vertical}>
      <div className="image-conteinr">
        <img src={post._embedded["wp:featuredmedia"][0].source_url}></img>
      </div>
      <div className="image">
        <h4>
          <Interweave content={post.title.rendered}></Interweave>
        </h4>
        <p>
          <Interweave content={post.excerpt.rendered}></Interweave>
        </p>
        <a href={post.link} target="_blank">
          Read more...
        </a>
      </div>
    </StyledPost>
  );
}
