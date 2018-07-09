import React from 'react';
import styled from 'styled-components';

import InfoP from './InfoP';


const introMessage = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";
const firstParagraph = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,";
const secondParagraph = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,";
const thirdParagraph = "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.";

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
      <InfoPadded message={firstParagraph} title="Subtitle 1" />
      <InfoP message={secondParagraph} title="Subtitle 2" />
    </Par1>
    <Par2 message={thirdParagraph}> </Par2>
  </InfoDesc>
);

export default OurInfo;