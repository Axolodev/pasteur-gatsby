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
    content: 'opcional';
    margin-left: 1em;
    font-size: 0.9em;
    color: ${({ theme }) => theme.color.greyBlue};
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
  height: ${props => (props.msg ? '4em' : '1.5em')};
  resize: none;
  font-family: ${props => props.theme.fontFamily.main};
  font-size: 0.75em;
  color: ${props => props.theme.color.white};
`;

const Submit = styled.input``;

const FormStatusList = {
  default: 0,
  sending: 1,
  sent: 2,
  error: -1,
};

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

class Message extends React.Component {
  state = {
    formStatus: FormStatusList.default,
    telefono: '',
    nombre: '',
    email: '',
    mensaje: '',
  };

  handleChange = event => {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => {
        alert('¡Muchas gracias! Tu mensaje ha sido enviado.');
      })
      .catch(error => alert(error));
  };

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
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <FieldLabel>
            <FieldName>Nombre</FieldName>
            <Text name="nombre" onChange={this.handleChange} />
          </FieldLabel>
          <FieldLabel>
            <FieldName>Teléfono</FieldName>
            <Text name="telefono" onChange={this.handleChange} />
          </FieldLabel>
          <FieldLabel data-optional>
            <FieldName>Email</FieldName>
            <Text name="email" onChange={this.handleChange} />
          </FieldLabel>
          <FieldLabel>
            <FieldName>Mensaje</FieldName>
            <Text name="mensaje" onChange={this.handleChange} msg />
          </FieldLabel>
          <Submit type="submit" value="Enviar" />
        </Form>
      </React.Fragment>
    );
  }
}

export default Message;
