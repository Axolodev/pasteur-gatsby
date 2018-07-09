import React from 'react';
import styled from 'styled-components';

import ButtonQuote from '../components/ButtonQuote';
import Public from '../components/PageHome/Public';
import Intro from './../components/PageHome/Intro';
import Slideshow from './../components/Slideshow';

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
  background: #606163;
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

const PageHome = () => (
  <Layout>
    <SlideshowLayout>
      <Slideshow 
        items={[
          {
            key: 0,
            background:'darkred',
          }, 
          {
            key: 1,
            background:'darkblue',
          },
          {
            key: 2,
            background:'green',
          },
        ]}
        defaultElementRender={(data) => <BgSlide {...data}/>}
      />
    </SlideshowLayout>
    <Intro />
    <Background>
      <Public />
      <ButtonQuote quote={text} />
    </Background>
  </Layout>
);

export default PageHome;