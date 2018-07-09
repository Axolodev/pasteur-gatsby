import React from 'react';
import styled from 'styled-components';

import OurInfo from '../components/PageAbout/OurInfo';
import ButtonQuote from '../components/ButtonQuote';

const text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.";

const Layout = styled.div`
  background: #989898;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Placeholder = styled.img`
  height: 200px;
`;

const Info = styled(OurInfo)`
  box-sizing: border-box;
  padding: 40px 60px 0 60px;
  background-color: white;
`

const PageAbout = () => (
  <Layout>
    <Placeholder />
    <Info />
    <ButtonQuote quote={text} />
  </Layout>
);

export default PageAbout;