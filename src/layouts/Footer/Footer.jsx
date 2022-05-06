import styled from "styled-components";
import Logo from "../../components/Logo/Logo";
import Facebook from "../../../assets/images/icon-facebook.svg";
import Instagram from "../../../assets/images/icon-instagram.svg";
import Twitter from "../../../assets/images/icon-twitter.svg";
import Pinterest from "../../../assets/images/icon-pinterest.svg";

const icons = [Facebook, Instagram, Twitter, Pinterest];

const FooterStyles = styled.footer`
  background-color: var(--primary-dark-mod-cyan);
  border: 1px solid transparent;
  ${Logo} {
    margin: 2rem auto;
    display: block;
    filter: invert(27%) sepia(20%) saturate(1049%) hue-rotate(116deg) brightness(94%) contrast(88%);
  }
`;

const List = styled.ul`
  margin: 4rem 0;
  text-align: center;
  font-size: 3rem;
  @media (min-width: 75em) {
    font-size: 2.2rem;
    justify-content: center;
    gap: 3rem;
  }
  display: flex;
  justify-content: space-evenly;
  color: var(--primary-dark-des-cyan);

`;
const ListItem = styled.li`
  display: inline-block;
`;

const IconImg = styled.img`
  @media (min-width: 75em) {
    width: 2rem;
  }
`;

const Footer = () => {
  return (
    <FooterStyles>
      <Logo />
      <List>
        <ListItem>About</ListItem>
        <ListItem>Services</ListItem>
        <ListItem>Projects</ListItem>
      </List>
      <List>
        {icons.map((icon, index) => {
          IconImg.defaultProps = {
            src: icon,
          };
          return (
            <ListItem key={index}>
              <IconImg />
            </ListItem>
          );
        })}
      </List>
    </FooterStyles>
  );
};

export default Footer;
