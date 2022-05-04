import Logo from "../../components/Logo/Logo";
import ArrowSvg from '../../../assets/images/icon-arrow-down.svg';
import styled from "styled-components";
import heroImage from "../../../assets/images/mobile/image-header.jpg";
import Navigation from "../../components/Navigation/Navigation";
import Menu from '../../components/Menu/Menu';
import React, { useState } from 'react';

const HeaderStyles = styled.header`
  height: 100vh;
  background-image: url(${heroImage});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;
  background-clip: content-box;
  background-size: cover;

  ${Logo} {
    margin: 1.5rem 0 0 1.5rem;
  }

  position: relative;
`;

const HeroText = styled.h2`
  text-align: center;
  font-size: 3rem;
  color: var(--white);
  font-family: 'Fraunces', serif;
  letter-spacing: .7rem;
  text-transform: uppercase;
  width: min-content;
  margin: 10rem auto 5rem;
  font-weight: 900;
`

const Arrow = styled.img`
  margin: 0 auto;
  display: block;
`
Arrow.defaultProps = {
    src: ArrowSvg,
}
const Header = () => {
    const [menuStatus, setMenuStatus] = useState(false);

    const menuHandler = () => {
        setMenuStatus(prevState => !prevState);
    }

  return (
    <HeaderStyles>
      <Logo />
      <Navigation changeMenuStatus={menuHandler} />
      <Menu isOpen={menuStatus}/>
      <HeroText>
          we are creatives
      </HeroText>
      <Arrow />
    </HeaderStyles>
  );
};

export default Header;
