import React from 'react';
import styled from 'styled-components';
import { gtag } from '../../utilities/gtag';

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

const Input = styled.input`
  height: 1.5em;
  background-color: ${props => props.theme.color.greyBlue};
  margin-bottom: 1em;
  font-family: ${props => props.theme.fontFamily.main};
  color: ${props => props.theme.color.white};
  font-size: 0.75em;
  ${({ disabled }) => disabled && 'opacity: 0.5;'} outline: none;
  border: 1px solid transparent;
  padding: 0.3em;
  resize: none;

  :focus {
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
`;

const Textarea = styled(Input.withComponent('textarea'))`
  height: 4em;
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
    this.setState({
      formStatus: FormStatusList.sending,
    });
  };

  componentDidUpdate() {
    if (this.state.formStatus === FormStatusList.sending) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contacto',
          ...this.state,
        }),
      })
        .then(() => {
          this.setState({
            formStatus: FormStatusList.sent,
          });
        })
        .catch(error => {
          this.formError = error;
          this.setState({
            formStatus: FormStatusList.error,
          });
        });
    }

    if (this.state.formStatus === FormStatusList.sent) {
      alert('¡Muchas gracias! Tu mensaje ha sido enviado.');
      gtag('event', 'conversion', {'send_to': 'AW-789445090/mhoqCMmcq4kBEOLzt_gC'});
    }

    if (this.state.formStatus === FormStatusList.error) {
      alert(this.formError);
    }
  }

  getIsFormDisabled = () => {
    return (
      this.state.formStatus === FormStatusList.sent ||
      this.state.formStatus === FormStatusList.sending
    );
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
            <Input
              disabled={this.getIsFormDisabled()}
              name="nombre"
              autocomplete="name"
              onChange={this.handleChange}
              required
            />
          </FieldLabel>
          <FieldLabel>
            <FieldName>Teléfono</FieldName>
            <Input
              disabled={this.getIsFormDisabled()}
              name="telefono"
              autocomplete="tel-national"
              onChange={this.handleChange}
            />
          </FieldLabel>
          <FieldLabel data-optional>
            <FieldName>Email</FieldName>
            <Input
              disabled={this.getIsFormDisabled()}
              name="email"
              autocomplete="email"
              type="email"
              onChange={this.handleChange}
            />
          </FieldLabel>
          <FieldLabel>
            <FieldName>Mensaje</FieldName>
            <Textarea
              disabled={this.getIsFormDisabled()}
              name="mensaje"
              onChange={this.handleChange}
              msg
              required
            />
          </FieldLabel>
          <Submit
            type="submit"
            value="Enviar"
            disabled={this.getIsFormDisabled()}
          />
        </Form>
      </React.Fragment>
    );
  }
}

export default Message;
