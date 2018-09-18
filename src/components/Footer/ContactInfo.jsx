import React from 'react';
import styled from 'styled-components';

import { device } from '../../utilities/device';
import ContactMethods from './ContactMethods';
import Message from './Message';
import Questions from './Questions';

const Layout = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: min-content;
  grid-template-areas:
    "Motto Motto ."
    "Contact Schedule DM"
    "Rights . Website";
  box-sizing: border-box;
  height: auto;
  padding: 2em 4.5em;
  background-color: ${props => props.theme.color.darkBlue};
  font-family: ${props => props.theme.fontFamily.main};
  color: white;
  grid-row-gap: 1em;

  ${device.laptop} {
    padding: 2em;
  }

  ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2em;
    padding: 2em;
    grid-template-areas:
      "Motto Motto"
      "Contact Schedule"
      "DM DM"
      "Rights Website";
  }

  ${device.mobile} {
    grid-row-gap: 1em;
    padding: 1em;
    grid-template-areas:
      "Motto Motto"
      "Contact Contact"
      "Schedule Schedule"
      "DM DM"
      "Rights Website";
  }

  p, li {
    font-size: 0.75rem;
  }
`;

const Motto = styled.div`
  grid-area: Motto;

  p {
    font-size: 0.85rem;
    font-family: ${props => props.theme.fontFamily.main};
  }
`;

const Contacts = styled.div`
  grid-area: Contact;
`;

const Schedule = styled.div`
  grid-area: Schedule;
  box-sizing: border-box;
  padding-left: 2em;

  ${device.mobile} {
    padding-left: 0;
  }
`;

const DirectMessage = styled.div`
  grid-area: DM;
  box-sizing: border-box;
`;

const FAQ = styled.div`
  display: none;
  grid-area: FAQ;
  padding: 0 0 0 1em;
`;

const Rights = styled.div`
  grid-area: Rights;
  display: flex;
  padding: 1em 0;
`;

const Website = styled.div`
  grid-area: Website;
  padding: 1em 0;

  p {
    text-align: right;
  }
`;

const SubsectionHeader = styled.h3`
  font-size: 1rem;
  padding-bottom: 1em;
`;

const Horario = styled.ul``;

const HorarioItem = styled.li`
  padding-bottom: 1em;
`;

const ContactInfo = () => (
  <Layout>
    <Motto>
      <p>Laboratorios Pasteur, 21 años cuidandonos juntos.</p>
      <p>Brindando certeza accesible en análisis clínicos.</p>
    </Motto>
    <Contacts>
      <SubsectionHeader>CONTACTO</SubsectionHeader>
      <ContactMethods />
    </Contacts>
    <Schedule>
      <SubsectionHeader>HORARIO</SubsectionHeader>
      <Horario>
        <HorarioItem>Sucursal Matriz:</HorarioItem>
        <HorarioItem>Lunes a Viernes 7 am a 7 pm</HorarioItem>
        <HorarioItem>Sábados 8 am a 3 pm</HorarioItem>
        <HorarioItem>Otras Sucursales:</HorarioItem>
        <HorarioItem>Lunes a Viernes 7 am a 4 pm</HorarioItem>
        <HorarioItem>Sábados 7 am a 4 pm</HorarioItem>
      </Horario>
    </Schedule>
    <DirectMessage>
      <SubsectionHeader>MENSAJE DIRECTO</SubsectionHeader>
      <Message />
    </DirectMessage>
    <FAQ>
      <SubsectionHeader>PREGUNTAS FRECUENTES</SubsectionHeader>
      {false && <Questions />}
    </FAQ>
    <Rights>
      <p>Derechos Reservados a Laboratorios Pasteur 2018</p>
    </Rights>
    <Website>
      <p>https://pasteur.mx</p>
    </Website>
  </Layout>
);

export default ContactInfo;
