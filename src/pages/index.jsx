import React from 'react';
import ImageGallery from 'react-image-gallery';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import "react-image-gallery/styles/css/image-gallery.css";

import ButtonQuote from '../components/ButtonQuote';
import Public from '../components/PageHome/Public';
import Intro from './../components/PageHome/Intro';
import Slideshow from './../components/Slideshow';
import quoteBackground from '../components/PageHome/assets/quote-bg.jpg';
import AppLayout from './../components/AppLayout/index';


const text = 'Comprometidos por el bienestar de tu familia.';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const SlideshowLayout = styled.div`
  background: black;
  width: 100%;
  position: relative;
`;

const Background = styled.div``;

const BgSlide = styled.div.attrs({
  style: props => ({ ...props }),
})`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`;

const PageHome = ({ data }) => {
  const slides = data.slides.edges.map(({node: {frontmatter}}) => ({
    original: frontmatter.img
  }));

  return (
    <AppLayout>
      <Layout>
        <SlideshowLayout>
          <ImageGallery
            items={slides}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            slideDuration={600}
            slideInterval={4000}
            showBullets
            autoPlay
            lazyLoad
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
    </AppLayout>
  );
};

export default PageHome;

export const pageQuery = graphql`
  query GetSlidesData {
    slides: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "slide" } } }
    ) {
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
