import styled from "styled-components";
import Heading from "../Heading/Heading";

const InfoCardStyles = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  align-items: end;
  @media (min-width: 75em) {
    width: 50%;
  }
`;

const BodyText = styled.p`
  font-size: 1.8rem;
  margin-top: 1rem;
`;

const ImgCard = styled.img`
  width: 100%;
`;

const Wrapper = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  color: ${(props) =>
    props.first ? "var(--primary-dark-mod-cyan)" : "var(--primary-dark-blue)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 10rem 1.5rem;
  @media (min-width: 75em) {
    margin: 2rem 1.5rem;
    
    align-self: end;
  }
`;

const Picture = styled.picture`
  grid-area: 1 / 1 / 2 / 2;
`;
const Source = styled.source``;

const InfoCard = ({ title, imgs, text }) => {

  Source.defaultProps = {
    srcSet: imgs.desktop,
    media: "(min-width: 48em)",
  };

  ImgCard.defaultProps = {
    src: imgs.mobile,
  };
  return (
    <InfoCardStyles>
      <Picture>
        <Source />
        <ImgCard />
      </Picture>
      {title.slice(0, 1) == "G" ? (
        <Wrapper first>
          <Heading primary>{title}</Heading>
          <BodyText>{text}</BodyText>
        </Wrapper>
      ) : (
        <Wrapper>
          <Heading primary>{title}</Heading>
          <BodyText>{text}</BodyText>
        </Wrapper>
      )}
    </InfoCardStyles>
  );
};

export default InfoCard;
