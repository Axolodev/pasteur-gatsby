import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import Layout from '../components/Layout';
import { H1 } from '../components/Headers';
import { HeaderSizes } from './../components/Headers';
import { device } from '../utilities/device';

const ImageContainer = styled.div`
  flex: 1;
  text-align: center;
`;

const FeaturedImage = styled.img`
  width: 50vw;
  max-width: 100%;
  height: auto;

  ${device.tablet} {
    width: 100%;
  }
`;

const PostDate = styled.time`
  color: #AAA;
  padding: 1em 0;
`;

const Content = styled(ReactMarkdown)`
  font-family: ${({theme}) => theme.fontFamily.main};
  color: ${({theme}) => theme.color.black};
  margin-top: 1em;
  
  > * {
    margin: 1em 0;
    line-height: 1.3em;
  }

  > ul > li {
    padding: 0.5em 0;
  }
  
  img {
    max-width: 100%;
  }

  a {
    color: ${({theme}) => theme.color.darkBlue};
  }

  h1 {
    font-size: ${HeaderSizes.h1};
  }
  
  h2 {
    font-size: ${HeaderSizes.h2};
  }

  h3 {
    font-size: ${HeaderSizes.h3};
  }
  
  h4 {
    font-size: ${HeaderSizes.h4};
  }
`;

function NewsEntry ({data}) {
  const { newsEntryData } = data;
  const { frontmatter, rawMarkdownBody } = newsEntryData;
  const { date, image, title } = frontmatter;

  return (
    <Layout>
      <H1>{title}</H1>
      <PostDate>{date}</PostDate>
      <ImageContainer>
        <FeaturedImage src={image} />
      </ImageContainer>
      <Content source={rawMarkdownBody} />
    </Layout>
  )
}

export default NewsEntry;

export const query = graphql`
  query GetNewsEntryByRoute($route: String!) {
    newsEntryData: markdownRemark(
      frontmatter: {
        type: {eq: "news"},
        path: {eq: $route}
      }
    ) {
      rawMarkdownBody
      frontmatter {
        title
        image
        date
        path
      }
    }
  }
`;