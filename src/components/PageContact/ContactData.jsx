import React from 'react';
import styled from 'styled-components';

const Contacto = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Titulo = styled.p`
  text-transform: uppercase;
  font-family: ${props => props.theme.fontFamily.main};
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  color: #989898;
  padding-bottom: 10px;
`;

const Subtitulo = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #989898;
  line-height: 2rem;
`;

const Texto = styled.p`
  font-size: 1.2rem;
  color: #989898;
`;

const TextoExt = Texto.extend`
  padding-left: 60px;
`;

const Email = Texto.extend`
  font-size: calc(1.2rem - 0.1vw);
`

const ContactData = (props) => (
  <Contacto className={props.className}>
    <Titulo> Contacto </Titulo>
    <div>
      <Subtitulo> Sucursal Matriz </Subtitulo>
      <Texto> Av. Chapultepec 1922-A Col. Buenos Aires. Monterrey, Nuevo León </Texto>
    </div>
    <div>
      <Subtitulo> Teléfono </Subtitulo>
      <Texto> 01 (81) 8354 8491 </Texto>
      <TextoExt> 8358 3957 </TextoExt>
    </div>
    <div>
      <Subtitulo> E-mail </Subtitulo>
      <Email>labpasteur@gmail.com</Email>
    </div>
  </Contacto>
);

export default ContactData;