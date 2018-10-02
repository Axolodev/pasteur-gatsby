import React from 'react';
import styled from 'styled-components';
import { H3 } from '../Headers';
import { device } from '../../utilities/device';
import { gtag } from './../../utilities/gtag';

function phoneNumberOne() {
  gtag('config', 'AW-789445090/GGMwCJjkuYkBEOLzt_gC', {
    phone_conversion_number: '8183548491',
  });
}

function phoneNumberTwo() {
  gtag('config', 'AW-789445090/CtA7CIWvpIkBEOLzt_gC', {
    phone_conversion_number: '8183583957',
  });
}

const Contacto = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 200;
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily.main};
`;

const Titulo = H3.extend`
  text-transform: uppercase;
  text-align: left;
  padding-bottom: 10px;
`;

const Subtitulo = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
  line-height: 2rem;
`;

const Texto = styled.p`
  font-size: 1.1rem;
  color: #333;
`;

const TextoExt = Texto.extend`
  padding-left: 60px;
`;

const Email = Texto.extend`
  font-size: calc(1.2rem - 0.1vw);
`;

const PhoneLink = styled.a`
  display: none;
  color: #333;

  ${device.tablet} {
    display: initial;
  }
`;

const DisappearingData = styled.span`
  ${device.tablet} {
    display: none;
  }
`;

const ContactData = props => (
  <Contacto>
    <Titulo> Sucursal Matriz </Titulo>
    <div>
      <Texto>
        {' '}
        Av. Chapultepec 1922-A Col. Buenos Aires. Monterrey, Nuevo León{' '}
      </Texto>
    </div>
    <div>
      <Subtitulo> Teléfono </Subtitulo>
      <Texto>
        <DisappearingData>01 (81) 8354 8491</DisappearingData>
        <PhoneLink onClick={phoneNumberOne} href="tel:818-354-8491">
          01 (81) 8354 8491
        </PhoneLink>
      </Texto>
      <TextoExt>
        <DisappearingData>8358 3957</DisappearingData>
        <PhoneLink onClick={phoneNumberTwo} href="tel:818-358-3957">
          8358 3957
        </PhoneLink>
      </TextoExt>
    </div>
    <div>
      <Subtitulo> E-mail </Subtitulo>
      <Email>contacto@pasteur.mx</Email>
    </div>
  </Contacto>
);

export default ContactData;
