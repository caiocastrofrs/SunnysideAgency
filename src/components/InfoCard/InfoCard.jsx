import styled from "styled-components";
import Heading from "../Heading/Heading";

const InfoCardStyles = styled.div`
  position: relative;
`;

const BodyText = styled.p`
  font-size: 1.8rem;
  margin-top: 1rem;
`;

const ImgCard = styled.img``;

const Wrapper = styled.div`
  position: absolute;
  bottom: 4rem;
  color: ${props => props.first ? "var(--primary-dark-mod-cyan)" : "var(--primary-dark-blue)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 1.5rem;
`;

const InfoCard = ({ title, img, text }) => {
  ImgCard.defaultProps = {
    src: img,
  };
  return (
    <InfoCardStyles>
      <ImgCard />
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
