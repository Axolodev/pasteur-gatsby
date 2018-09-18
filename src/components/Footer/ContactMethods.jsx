import React from 'react';
import styled from 'styled-components';

import { device } from '../../utilities/device';

function phoneNumberOne () {
  gtag('config', 'AW-789445090/GGMwCJjkuYkBEOLzt_gC', {
    'phone_conversion_number': '8183548491'
  });
}

function phoneNumberTwo () {
  gtag('config', 'AW-789445090/CtA7CIWvpIkBEOLzt_gC', {
    'phone_conversion_number': '8183583957'
  });
}

const ContactList = styled.div`
  list-style-type: none;
  margin: 0;
  line-height: 0.9em;
`;

const PhoneLink = styled.a`
  display: none;
  color: white;

  ${device.tablet} {
    display: initial;
  }
`;

const DisappearingData = styled.span`
  ${device.tablet} {
    display: none;
  }
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
      <p>
        <DisappearingData>01 (81) 8354 8491</DisappearingData>
        <PhoneLink onClick={phoneNumberOne} href="tel:818-354-8419">01 (81) 8354 8491</PhoneLink>
        <br/>
        <DisappearingData>8358 3957</DisappearingData>
        <PhoneLink onClick={phoneNumberTwo} href="tel:818-358-3957">8358 3957</PhoneLink>
      </p>
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
