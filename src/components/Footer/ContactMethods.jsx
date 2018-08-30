import React from 'react';
import styled from 'styled-components';

const ContactList = styled.div`
  list-style-type: none;
  margin: 0;
  line-height: 0.9em;
`;

const ContactItem = styled.div`
  display: flex;
  height: 1.8em;
  padding: 0 0 0 0.8em;
  align-items: center;
  word-break: break-all;

  > p:first-child {
    flex: 1;
  }

  > p:last-child {
    flex: 2;
  }
`;

const ContactMethods = () => (
  <ContactList>
    <ContactItem>
      <p>Dirección</p>
      <p>Av. Chapultepec 1922-A<br/>
      Col. Buenos Aires, Monterrey, Nuevo León</p>
    </ContactItem>
    <hr/>
    <ContactItem>
      <p>Teléfono</p>
      <p>01 (81) 8354 8491<br/>
      8358 3957</p>
    </ContactItem>
    <hr/>
    <ContactItem>
      <p>Email</p>
      <p>contacto@pasteur.mx</p>
    </ContactItem>
    <hr/>
    <ContactItem>
      <p>Facebook</p>
      <p>laboratoriospasteuranalisisclinicos</p>
    </ContactItem>
  </ContactList>
);

export default ContactMethods;
