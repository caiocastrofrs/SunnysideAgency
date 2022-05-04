import styled from "styled-components";
import Hamburguer from "../../../assets/images/icon-hamburger.svg";

const NavigationStyles = styled.nav`
  display: inline-block;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  & button {
      border: none;
      background-color: transparent;
      & img {
          width: 3rem;
      }
  }
`;
const Navigation = ({changeMenuStatus}) => {  
  return (
    <NavigationStyles>
      <button onClick={changeMenuStatus}>
        <img src={Hamburguer} alt="navigation icon" />
      </button>
    </NavigationStyles>
  );
};
export default Navigation;
