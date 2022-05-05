import styled from "styled-components";
import Heading from "../Heading/Heading";
import ArticleButton from "../ArticleButton/ArticleButton";

const ArticleCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  ${Heading} {
    width: 80%;
    text-align: center;
    margin: 3.5rem auto;
  }
`;

const ImgCard = styled.img``;

const BodyText = styled.p`
    font-size: 1.8rem;
    color: var(--very-dark-gray-blue);
    margin: .5rem 1rem;
    text-align: center;

`;

const ArticleCard = ({ title, img, text }) => {
  ImgCard.defaultProps = {
    src: img,
  };
  return (
    <ArticleCardStyles>
      <ImgCard />
      <Heading>{title}</Heading>
      <BodyText>{text}</BodyText>
      {title.slice(0,1) == 'T' ?
      <ArticleButton first={true}>learn more</ArticleButton>
      :
      <ArticleButton>learn more</ArticleButton>
      }
    </ArticleCardStyles>
  );
};

export default ArticleCard;
