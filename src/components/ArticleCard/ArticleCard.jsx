import styled from "styled-components";
import Heading from "../Heading/Heading";
import ArticleButton from "../ArticleButton/ArticleButton";

const ArticleCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  @media(min-width: 48em) {
    flex-direction: row;
  }

  @media(min-width: 75em) {
    &:first-of-type {
      flex-direction: row-reverse;
    }
  }
  align-items: center;
  ${Heading} {
    width: 80%;
    text-align: center;
    margin: 3.5rem auto;
    @media (min-width: 48em) {
      margin: 0;
    }
  }
`;

const ImgCard = styled.img`
  width: 100%;
`;

const BodyText = styled.p`
  font-size: 1.8rem;
  @media (min-width: 48em) {
    font-size: 1.6rem;
  }
  color: var(--very-dark-gray-blue);
  margin: 0.5rem 1rem;
  text-align: center;
`;

const Picture = styled.picture`
  @media (min-width: 75em) {
    width: 50%;
  }
`;
const Source = styled.source``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (min-width: 75em) {
    width: 50%;
  }
`;

const ArticleCard = ({ title, imgs, text }) => {
  Source.defaultProps = {
    srcSet: imgs.desktop,
    media: "(min-width: 75em)",
  };

  ImgCard.defaultProps = {
    src: imgs.mobile,
  };
  return (
    <ArticleCardStyles>
      <Picture>
        <Source />
        <ImgCard />
      </Picture>
      <Wrapper>
        <Heading primary>{title}</Heading>
        <BodyText>{text}</BodyText>
        {title.slice(0, 1) == "T" ? (
          <ArticleButton first={true}>learn more</ArticleButton>
        ) : (
          <ArticleButton>learn more</ArticleButton>
        )}
      </Wrapper>
    </ArticleCardStyles>
  );
};

export default ArticleCard;
