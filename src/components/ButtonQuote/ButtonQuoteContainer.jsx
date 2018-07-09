import React from 'react';
import styled from 'styled-components';

import Quote from './Quote';
import DeliveryButton from './DeliveryButton';

const Container = styled.div`
  width: 100%;
`;

const Separator = styled.div`
  padding: 45px 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
`;

const ButtonQuoteContainer = (props) => (
  <Container>
    <Separator>
      <DeliveryButton />
    </Separator>
    <Quote text={props.quote} />
  </Container>
);

export default ButtonQuoteContainer;