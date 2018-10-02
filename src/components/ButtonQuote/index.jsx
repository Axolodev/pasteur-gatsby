import React from 'react';
import styled from 'styled-components';

import Quote from './Quote';
import DeliveryButton from './DeliveryButton';

const Container = styled.div`
  width: 100%;
  position: relative;
  background: rgba(0, 0, 0, 0.3);
  overflow: hidden;

  ::before {
    content: '';
    position: absolute;
    overflow: hidden;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${({ background }) => background};
    z-index: -1;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }

  @media (max-width: 50em) {
    display: none;
  }
`;

const Separator = styled.div`
  padding: 45px 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
`;

const ButtonQuote = props => (
  <Container background={props.background}>
    <Separator>
      <DeliveryButton />
    </Separator>
    <Quote text={props.quote} />
  </Container>
);

export default ButtonQuote;
