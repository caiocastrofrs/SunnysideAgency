import LogoSvg from "../../../assets/images/logo.svg";
import styled from "styled-components";

const Logo = styled.img`
  display: inline-block;
`;
Logo.defaultProps = {
  src: LogoSvg,
};

export default Logo;
