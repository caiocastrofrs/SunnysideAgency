import styled from 'styled-components';

const ArticleButton = styled.button`
  font-size: 1.8rem;
  border: none;
  width: max-content;
  background-color: transparent;
  margin: 2rem 0 4rem;
  font-family: 'Fraunces',sans-serif;
  text-transform: uppercase;
  color: var(--very-dark-des-blue);
  position: relative;
  &::before {
    content: "";
    width: 100%;
    height: 1rem;
    position: absolute;
    bottom: 0;
    z-index: -1;
    border-radius: 2rem;
    background-color: ${props => props.first ? "var(--primary-yellow)" : "var(--primary-soft-red)"};
  }
`;

export default ArticleButton;