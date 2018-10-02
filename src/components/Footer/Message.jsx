import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FieldLabel = styled.label`
  display: flex;
  flex-direction: column;

  &[data-optional] > span::after {
    content: "opcional";
    margin-left: 1em;
    font-size: 0.9em;
    color: ${({theme}) => theme.color.greyBlue}
  }
`;

const FieldName = styled.span`
  padding: 0.5em 0;
  font-size: 0.75em;
`;

const Text = styled.textarea`
  height: 2.2em;
  margin: 0 0 1em 0;
  resize: none;
  background-color: ${props => props.theme.color.greyBlue};
  height: ${props => props.msg ? '4em' : '1.5em' };
  resize: none;
  font-family: ${props => props.theme.fontFamily.main};
  font-size: 0.75em;
  color: ${props => props.theme.color.white};
`;

const Submit = styled.input`
`;

const FormStatusList = {
  default: 0,
  sending: 1,
  sent: 2,
  error: -1
};

class Message extends React.Component {
  state = {
    formStatus: FormStatusList.default
  }

  render() {
    return (
      <React.Fragment>
        <Form 
          name="contacto"
          method="post"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="form-name" value="contacto" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <FieldLabel>
            <FieldName>Nombre</FieldName>
            <Text />
          </FieldLabel>
          <FieldLabel>
            <FieldName>Teléfono</FieldName>
            <Text />
          </FieldLabel>
          <FieldLabel data-optional>
            <FieldName>Email</FieldName>
            <Text />
          </FieldLabel>
          <FieldLabel>
            <FieldName>Mensaje</FieldName>
            <Text msg />
          </FieldLabel>
          <Submit type='submit' value='Enviar' />
        </Form>
      </React.Fragment>
    );
  }
}

export default Message;