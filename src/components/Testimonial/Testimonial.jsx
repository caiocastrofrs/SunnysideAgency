import styled from "styled-components";

const TestimonialStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8rem;
  @media (min-width: 75em) {
    width: 33%;
  }
`;

const ProfilePic = styled.img`
  border-radius: 50%;
  transform: scale(0.5);
`;

const BodyText = styled.p`
  font-size: 1.8rem;
  @media (min-width: 75em) {
    font-size: 1.2rem;
  }
  color: var(--very-dark-gray-blue);
  text-align: center;
  line-height: 2.5rem;
  margin: 0 1rem;
`;

const Name = styled.span`
  font-size: 2rem;
  font-family: 'Fraunces', sans-serif;
  color: var(--very-dark-des-blue);
  margin-top: 4rem;
`;

const Role = styled.span`
  font-size: 1.5rem;
  color: var(--grayish-blue);
`;

const Testimonial = ({ name, role, message, profilePic }) => {
  ProfilePic.defaultProps = {
    src: profilePic,
  };

  return (
    <TestimonialStyles>
      <ProfilePic />
      <BodyText>{message}</BodyText>
      <Name>{name}</Name>
      <Role>{role}</Role>
    </TestimonialStyles>
  );
};

export default Testimonial;
