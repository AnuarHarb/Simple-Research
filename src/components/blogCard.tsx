import styled from "styled-components";
import { Interweave } from "interweave";
import { Link } from "react-router-dom";
import moment from "moment";

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
        <p>
          Written on
          <Interweave
            content={moment(post.date).format(" MMMM DD, yyyy")}
          ></Interweave>
        </p>
        <h4>
          <Interweave content={post.title.rendered}></Interweave>
        </h4>
        <div>
          <Interweave content={post.excerpt.rendered}></Interweave>
        </div>
        <Link to={String(post.id)}>Read more...</Link>
      </div>
    </StyledPost>
  );
}
