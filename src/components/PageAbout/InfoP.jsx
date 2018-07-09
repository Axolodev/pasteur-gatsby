import React from 'react';
import styled from 'styled-components';

const Title = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  text-align: left;
  color: #989898;
`;

const Message = styled.p`
  font-size: 1.2rem;
  padding-left: 16px;
  line-height: 1.3em;
  color: #989898;
`;

const InfoP = (props) => (
  <div className={props.className}>
    {props.title && <Title>{props.title}</Title>}
    <Message>{props.message}</Message>
  </div>
);

export default InfoP;