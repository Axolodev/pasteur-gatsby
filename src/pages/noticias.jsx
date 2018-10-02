import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';

import Layout from './../components/Layout';
import { H1, H3 } from '../components/Headers';
import { device } from '../utilities/device';
import AppLayout from '../components/AppLayout';

const NewsLayout = styled.section`
  display: grid;
  grid-template-rows: repeat(2, minmax(10em, 40vh)) auto;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row;
  margin-top: 2em;
  grid-gap: 1em;

  ${device.laptop} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, minmax(10em, 40vh)) auto;
  }

  ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

const HighlightedNews = styled(Link)`
  position: relative;
  background-image: url("${props => props['data-image']}");
  background-size: cover;
  background-position: center;
`;

const NewsHeader = styled.span`
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  box-sizing: border-box;
  padding: 1em;
  font-family: ${({ theme }) => theme.fontFamily.main};
  width: 100%;
  bottom: 0;
  left: 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const MainNewsHeader = NewsHeader.extend`
  font-size: 1.5em;
`;

const MainNews = HighlightedNews.extend`
  grid-row: auto / span 2;
  grid-column: auto / span 2;
  background-color: darkblue;

  ${device.mobile} {
    grid-row: auto / span 1;
    grid-column: auto / span 1;
  }
`;

const SecondaryNews = HighlightedNews.extend`
  grid-row: auto / span 1;
  grid-column: auto / span 1;
  background-color: darkred;
`;

const OtherNewsSection = styled.section``;

const OtherNews = styled.ul`
  margin-top: 0.5em;
`;

const OtherNewsSingle = styled.li`
  font-family: ${({ theme }) => theme.fontFamily.main};
  padding: 0.5em 0;
  padding-left: 1em;
`;

const NewsLink = styled(Link)`
  color: ${({ theme }) => theme.color.darkBlue};
`;

function getCleanNewsDataFromEdges(newsEdges) {
  return newsEdges.map(
    ({
      node: {
        frontmatter: { title, date, path, image },
        excerpt,
      },
    }) => ({
      title,
      date,
      path: path.startsWith('/') ? path : `/${path}`,
      image,
      excerpt,
    })
  );
}

function Noticias({
  data: { mostRecentNews, allOtherNews, kindOfRecentButNotNewestNews },
}) {
  const mostRecentNewsData = getCleanNewsDataFromEdges(mostRecentNews.edges)[0];
  const kornnNewsData = getCleanNewsDataFromEdges(
    kindOfRecentButNotNewestNews.edges
  );
  const otherNewsData = getCleanNewsDataFromEdges(allOtherNews.edges);

  return (
    <AppLayout>
      <Layout>
        <H1>Noticias</H1>
        <NewsLayout>
          <MainNews
            to={`/noticias${mostRecentNewsData.path}`}
            data-image={mostRecentNewsData.image}
          >
            <MainNewsHeader>{mostRecentNewsData.title}</MainNewsHeader>
          </MainNews>
          {kornnNewsData.length && (
            <SecondaryNews
              to={`/noticias${kornnNewsData[0].path}`}
              data-image={kornnNewsData[0].image}
            >
              <NewsHeader>{kornnNewsData[0].title}</NewsHeader>
            </SecondaryNews>
          )}
          {kornnNewsData.length === 2 && (
            <SecondaryNews
              to={`/noticias${kornnNewsData[1].path}`}
              data-image={kornnNewsData[1].image}
            >
              <NewsHeader>{kornnNewsData[1].title}</NewsHeader>
            </SecondaryNews>
          )}
          {otherNewsData.length > 0 && (
            <OtherNewsSection>
              <H3>Otras noticias</H3>
              <OtherNews>
                {otherNewsData.map(data => (
                  <OtherNewsSingle key={data.title}>
                    <NewsLink to={`/noticias${data.path}`}>
                      {data.title}
                    </NewsLink>
                  </OtherNewsSingle>
                ))}
              </OtherNews>
            </OtherNewsSection>
          )}
        </NewsLayout>
      </Layout>
    </AppLayout>
  );
}

export default Noticias;

export const query = graphql`
  fragment BlogEntryData on MarkdownRemarkConnection {
    edges {
      node {
        frontmatter {
          title
          path
          image
        }
      }
    }
  }

  query AllBlogEntries {
    mostRecentNews: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "news" } } }
      limit: 1
    ) {
      ...BlogEntryData
    }

    kindOfRecentButNotNewestNews: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "news" } } }
      skip: 1
      limit: 2
    ) {
      ...BlogEntryData
    }

    allOtherNews: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "news" } } }
      skip: 3
    ) {
      ...BlogEntryData
    }
  }
`;
