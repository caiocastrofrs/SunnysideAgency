import styled,{ keyframes } from "styled-components";
import ButtonMenu from './ButtonMenu/ButtonMenu';

const FadeIn = keyframes`
  0% { opacity: 0; transform: scaleY(.9500) translateX(-50%);}
  100% { opacity: 1; transform: scaleY(1) translateX(-50%);}
`

const MenuStyles = styled.ul`
  width: 290px;
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: top right;
  clip-path: polygon(92% 7%, 100% 0, 100% 100%, 0 100%, 0 7%);
  background-color: var(--white);
  list-style-type: none;
  animation-name: ${FadeIn};
  animation-duration: .1s;
  animation-timing-function: linear;
`;
const MenuItemStyles = styled.li`
  &:first-of-type {
    padding-top: 5rem;
  }
  
  &:not(:first-of-type) {
    padding-top: 2rem;
  }

  &:last-of-type {
    padding-bottom: 2rem;
  }
  
  text-align: center;
  color: var(--dark-grayish-blue);
  font-size: 2rem;
`;

const Menu = ({isOpen}) => {

  return (
    isOpen && 
      <MenuStyles>
        <MenuItemStyles>About</MenuItemStyles>
        <MenuItemStyles>Services</MenuItemStyles>
        <MenuItemStyles>Projects</MenuItemStyles>
        <ButtonMenu>contact</ButtonMenu>
      </MenuStyles>
  );
};

export default Menu;
