import React from 'react';
import styled from 'styled-components';

import InfoP from './InfoP';


const introMessage = "En Laboratorios Pasteur Análisis Clínicos contamos con más de 21 años de experiencia en el mercado y con más de 10 sucursales al servicio de las familias de Nuevo León. Nuestro compromiso por el cuidado de la salud nos motiva al constante crecimiento y la búsqueda constante de próximas aperturas.";
const firstParagraph = "Laboratorios Pasteur, es la accesibilidad y certeza profesional en análisis clínicos que tu y tu familia necesitan. ";
const secondParagraph = "Brindamos servicios corporativos y empresariales facilitando el cuidado de la salud de tu personal e integrantes de tu equipo de trabajo.";
const thirdParagraph = "Creemos en la inversión de relaciones y alianzas a largo plazo.";

const InfoDesc = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 50% 50%;
  grid-template-rows: 10% auto 15%;
  grid-template-areas: 
      "intro intro"
      "image par1"
      "par3 par3";  
  grid-auto-flow: row;
  grid-gap: 5px;
  overflow: hidden;
  background-color: white;
`;

const AboutUsTitle = styled.p`
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
  font-family: ${props => props.theme.fontFamily.main};
  line-height: 1.5em;
  text-align: left;
  padding-left: 14px;
  color: #989898;
`;

const Intro = styled.div`
  grid-area: intro;
  padding: 10px;
`;

const Image = styled.img`
  margin: auto 0;
  width: 100%;
  height: auto;
  max-height: 100%;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  grid-area: image;
  display: flex;
  align-items: center;
`;

const Par1 = styled.div`
  grid-area: par1;
  padding: 5px 10px;
  margin: auto;
`;

const InfoPadded = styled(InfoP)`
  padding-bottom: 30px;
`

const Par2 = styled(InfoP)`
  grid-area: par3;
  padding: 5px 10px;
`;


const OurInfo = (props) => (
  <InfoDesc className={props.className}>
    <Intro>
      <AboutUsTitle> Sobre Nosotros </AboutUsTitle>
      <InfoP message={introMessage} />
    </Intro>
    <ImageContainer> <Image src={null} /> </ImageContainer>
    <Par1>
      <InfoPadded message={firstParagraph} />
      <InfoP message={secondParagraph} />
    </Par1>
    <Par2 message={thirdParagraph}> </Par2>
  </InfoDesc>
);

export default OurInfo;