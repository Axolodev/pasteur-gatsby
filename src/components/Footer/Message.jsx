import React from 'react';
import styled from 'styled-components';

const FieldName = styled.p`
  padding: 0.2em 0 0.5em 2.3em;
`

const Text = styled.textarea`
  height: 2.2em;
  width: 95%;
  margin: 0 0 1em 0;
  resize: none;
  background-color: ${props => props.theme.color.greyBlue};
  height: ${props => props.msg ? '4em' : '1.5em' };
  resize: ${props => props.msg ? 'vertical' : 'none' };
  font-family: ${props => props.theme.fontFamily.main};
  color: ${props => props.theme.color.white};
`

const Submit = styled.input`
  width: 50%;
  float: right;
  margin-right: 1em;
`;

const Message = () => (
  <div>
    <form action="" method="post">
      <FieldName>Email</FieldName>
      <Text/>
      <FieldName>Mensaje</FieldName>
      <Text msg/>
      <Submit type='submit' value='Enviar'/>
    </form>
  </div>
);

export default Message;