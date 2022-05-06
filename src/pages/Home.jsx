import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import Main from "../layouts/Main/Main";
import Section from "../layouts/Section/Section";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import InfoCard from "../components/InfoCard/InfoCard";
import Testimonial from "../components/Testimonial/Testimonial";
import Gallery from "../components/Gallery/Gallery";
import Heading from "../components/Heading/Heading";
import ArticleOneImage from "../../assets/images/mobile/image-transform.jpg";
import ArticleTwoImage from "../../assets/images/mobile/image-stand-out.jpg";
import ArticleOneImageDesktop from "../../assets/images/desktop/image-transform.jpg";
import ArticleTwoImageDesktop from "../../assets/images/desktop/image-stand-out.jpg";
import CardOneImage from "../../assets/images/mobile/image-graphic-design.jpg";
import CardTwoImage from "../../assets/images/mobile/image-photography.jpg";
import CardOneImageDesktop from "../../assets/images/desktop/image-graphic-design.jpg";
import CardTwoImageDesktop from "../../assets/images/desktop/image-photography.jpg";
import EmilyPic from "../../assets/images/image-emily.jpg";
import JenniePic from "../../assets/images/image-jennie.jpg";
import ThomasPic from "../../assets/images/image-thomas.jpg";


const info = [
  [
    {
      title: "Transform your brand",
      body: "We are full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
      imgs: {mobile: ArticleOneImage, desktop: ArticleOneImageDesktop}
    },
    {
      title: "Stand out to the right audience",
      body: "Using a collaborative formula of designers, researchers, photographers, videographers,  and copywriters,  we'll build and extend your brand in digital places.",
      imgs: {mobile: ArticleTwoImage, desktop: ArticleTwoImageDesktop}
    },
  ],
  [
    {
      title: "Graphic Design",
      body: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention",
      imgs: {mobile: CardOneImage, desktop: CardOneImageDesktop}
    },
    {
      title: "Photography",
      body: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
      imgs: {mobile: CardTwoImage, desktop: CardTwoImageDesktop}
    },
  ],
  [
    {
      name: "Emily R.",
      role: "Marketing Director",
      message:
        "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      profilePic: EmilyPic,
    },
    {
      name: "Thomas S.",
      role: "Chief Operating Officer",
      message:
        "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
      profilePic: ThomasPic,
    },
    {
      name: "Jennie F.",
      role: "Business Owner",
      message:
        "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      profilePic: JenniePic,
    },
  ],
];

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <Section aria-label="article card section" aria-required="true">
          {info[0].map((article, index) => {
            return (
              <ArticleCard
                title={article.title}
                imgs={article.imgs}
                text={article.body}
                key={index}
              />
            );
          })}
        </Section>
        <Section aria-label="info section" aria-required="true">
          {info[1].map((card, index) => {
            return (
              <InfoCard
                title={card.title}
                imgs={card.imgs}
                text={card.body}
                key={index}
              />
            );
          })}
        </Section>
        <Section aria-label="testimonial section" aria-required="true">
          <Heading>client testimonials</Heading>
          {info[2].map((card, index) => {
            return (
              <Testimonial
                name={card.name}
                role={card.role}
                message={card.message}
                profilePic={card.profilePic}
                key={index}
              />
            );
          })}
        </Section>
        <Section aria-label="gallery section" aria-required="true">
          <Gallery />
        </Section>
      </Main>
      <Footer />
    </>
  );
};

export default Home;
