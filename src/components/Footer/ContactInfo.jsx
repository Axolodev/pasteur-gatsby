import React from 'react';
import styled from 'styled-components';

import ContactMethods from './ContactMethods';
import Message from './Message';
import Questions from './Questions';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 30% 18% 20% auto;
  grid-template-rows: 18% auto 15%;
  grid-template-areas:
    "Motto Motto Motto Motto"
    "Contact Schedule DM FAQ"
    "Rights Website Website .";
  box-sizing: border-box;
  height: auto;
  padding: 1.6em 4.5em 1em;
  background-color: ${props => props.theme.color.darkBlue};
  font-family: ${props => props.theme.fontFamily.main};
  color: white;

  h1 {
    font-size: 1rem;
    padding: 0 0 2em 0.8em;
  }

  p, li {
    font-size: 0.75rem;
  }
`

const Motto = styled.div`
  grid-area: Motto;
  padding: 13px 10px;

  p {
    font-size: 0.85rem;
    font-family: ${props => props.theme.fontFamily.main};
  }
`

const Contacts = styled.div`
  grid-area: Contact;
`

const Schedule = styled.div`
  grid-area: Schedule;
  box-sizing: border-box;
  padding: 0 0 0 2em;
`

const DirectMessage = styled.div`
  grid-area: DM;
  box-sizing: border-box;
  padding: 0 0 0 0.4em;

`

const FAQ = styled.div`
  grid-area: FAQ;
  padding: 0 0 0 1em;
`

const Rights = styled.div`
  grid-area: Rights;
  display: flex;
  align-items: center;
  padding-left: 0.8em;
`

const Website = styled.div`
  grid-area: Website;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
  }
`

const Horario = styled.ul`
  
  li {
    padding-bottom: 1em;
  }
`;

const ContactInfo = () => (
  <Layout>
    
    <Motto>
      <p>Laboratorios Pasteur, 21 años cuidandonos juntos.</p>
      <p>Brindando certeza accesible en análisis clínicos.</p>
    </Motto>
    <Contacts>
      <h1>CONTACTO</h1>
      <ContactMethods />
    </Contacts>
    <Schedule>
      <h1>HORARIO</h1>
      <Horario>
        <li>Sucursal Matriz:</li>
        <li>Lunes a Viernes 7 am a 7 pm</li>
        <li>Sábados 8 am a 3 pm</li>
        <li>Otras Sucursales:</li>
        <li>Lunes a Viernes 7 am a 4 pm</li>
        <li>Sábados 8 am a 3 pm</li>
      </Horario>
    </Schedule>
    <DirectMessage>
      <h1>MENSAJE DIRECTO</h1>
      <Message />
    </DirectMessage>
    <FAQ>
      <h1>PREGUNTAS FRECUENTES</h1>
      {false && <Questions />}
    </FAQ>
    <Rights>
      <p>Derechos Reservados a Laboratorios Pasteur 2018</p>
    </Rights>
    <Website>
      <p>www.laboratoriospasteur.mx</p>
    </Website>
  </Layout>
);

export default ContactInfo;
