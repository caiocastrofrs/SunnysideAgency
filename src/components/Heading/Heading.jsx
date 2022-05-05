import styled from "styled-components";

const Heading = styled.h3`
  color: ${(props) =>
    props.primary ? "var(--very-dark-des-blue)" : "var(--grayish-blue)"};
  font-size: ${(props) => (props.primary ? "2.6rem" : "2rem")};
  font-family: "Fraunces", sans-serif;
  ${(props) =>
    !props.primary &&
    "text-transform: uppercase;" +
      "text-align: center;" +
      "margin: 5rem 0 3rem;"}
`;

export default Heading;
