import React from 'react';
import styled from 'styled-components';

import ButtonQuote from '../components/ButtonQuote';
import Public from '../components/PageHome/Public';
import Intro from './../components/PageHome/Intro';
import Slideshow from './../components/Slideshow';
import quoteBackground from '../components/PageHome/assets/quote-bg.jpg';

const text = 'Comprometidos por el bienestar de tu familia.';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const SlideshowLayout = styled.div`
  background: black;
  width: 100%;
  height: 100vh;
  min-height: 40rem;
  position: relative;
`;

const Background = styled.div`

`;

const BgSlide = styled.div.attrs({
  style: (props) => ({...props})
})`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`;

const PageHome = ({data}) => {
  const slides = data.slides.edges.map(({node}) => {
    const {frontmatter: {img, title}} = node;
    
    return {
      key: title,
      background: `url('${img}') center`, 
    };
  });

  return (
    <Layout>
      <SlideshowLayout>
        <Slideshow 
          items={slides}
          defaultElementRender={(data) => <BgSlide {...data}/>}
        />
      </SlideshowLayout>
      <Intro />
      <Background>
        <Public />
        <ButtonQuote
          quote={text}
          background={`url(${quoteBackground}) center`}
        />
      </Background>
    </Layout>
  );
}

export default PageHome;

export const pageQuery = graphql`
  query GetSlidesData {
    slides: allMarkdownRemark(filter: {frontmatter: {type: {eq: "slide"}}}) {
      edges {
        node {
          frontmatter {
            img
            title
          }
        }
      }
    }
  }
`;