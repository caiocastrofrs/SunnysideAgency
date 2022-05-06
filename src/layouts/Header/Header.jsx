import Logo from "../../components/Logo/Logo";
import ArrowSvg from "../../../assets/images/icon-arrow-down.svg";
import styled from "styled-components";
import heroImageJpg from "../../../assets/images/mobile/image-header.jpg";
import heroImageJpgDesktop from "../../../assets/images/desktop/image-header.jpg";
import Navigation from "../../components/Navigation/Navigation";
import Menu from "../../components/Menu/Menu";
import React, { useState } from "react";

const HeaderStyles = styled.header`
  display: grid;
  grid-template-rows: repeat(4, max-content);
  grid-template-columns: repeat(3, 1fr);
  ${Logo} {
    margin: 1.5rem 0 0 1.5rem;
    @media (min-width: 75em) {
      width: 15rem;
    }
    grid-area: 1 / 1 / 2 / 3;
  }
  position: relative;
`;

const HeroText = styled.h2`
  text-align: center;
  font-size: 3rem;
  color: var(--white);
  font-family: "Fraunces", serif;
  letter-spacing: 0.7rem;
  text-transform: uppercase;
  width: min-content;
  font-weight: 900;
  grid-area: 2 / 1 / 4 / -1;
  justify-self: center;
`;

const Arrow = styled.img`
  margin: 0 auto;
  display: block;
  padding-bottom: 10rem;
  grid-area: 4 / 2 / 5 / 3;
  @media (min-width: 75em) {
    width: 3.5rem;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  @media (min-width: 75em) {
    height: 100vh;
    object-fit: cover;
  }
`;

const Picture = styled.picture`
  grid-area: 1 / 1 / -1 / -1;
`;

const Source = styled.source``;

Source.defaultProps = {
  srcSet: heroImageJpgDesktop,
  media: "(min-width: 48em)",
};

HeroImage.defaultProps = {
  src: heroImageJpg,
};

Arrow.defaultProps = {
  src: ArrowSvg,
};

const Header = () => {
  const [menuStatus, setMenuStatus] = useState(false);

  const menuHandler = () => {
    setMenuStatus((prevState) => !prevState);
  };

  return (
    <HeaderStyles>
      <Picture>
        <Source />
        <HeroImage />
      </Picture>
      <Logo />
      <Navigation changeMenuStatus={menuHandler} />
      <Menu isOpen={menuStatus} />
      <HeroText>we are creatives</HeroText>
      <Arrow />
    </HeaderStyles>
  );
};

export default Header;
