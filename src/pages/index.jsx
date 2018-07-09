import React from 'react';
import styled from 'styled-components';

import ButtonQuote from '../components/ButtonQuote';
import Public from '../components/PageHome/Public';
import Intro from './../components/PageHome/Intro';

const text = 'Comprometidos por el bienestar de tu familia.';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Slideshow = styled.div`
  background: black;
  width: 100%;
  height: 100vh;
  min-height: 40rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url('https://images.pexels.com/photos/954585/pexels-photo-954585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    background-size: cover;
    opacity: 0.5;
  }
`;

const Background = styled.div`
  background: #606163;
`;

const PageHome = () => (
  <Layout>
    <Slideshow />
    <Intro />
    <Background>
      <Public />
      <ButtonQuote quote={text} />
    </Background>
  </Layout>
);

export default PageHome;