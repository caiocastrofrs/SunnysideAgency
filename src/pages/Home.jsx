import Header from "../layouts/Header/Header";
import Main from "../layouts/Main/Main";
import Section from "../layouts/Section/Section";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import ArticleOneImage from "../../assets/images/mobile/image-transform.jpg";
import ArticleTwoImage from "../../assets/images/mobile/image-stand-out.jpg";

const articleInfo = [
  {
    title: "Transform your brand",
    body: "We are full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
    img: ArticleOneImage,
  },
  {
    title: "Stand out to the right audience",
    body: "Using a collaborative formula of designers, researchers, photographers, videographers,  and copywriters,  we'll build and extend your brand in digital places.",
    img: ArticleTwoImage,
  },
];

const Home = () => {
  return (
    <>
      <Header /> 
      <Main>
        <Section>
          {articleInfo.map((article, index) => {
            return <ArticleCard title={article.title} img={article.img} text={article.body} key={index} />;
          })}
        </Section>
      </Main>
    </>
  );
};

export default Home;
