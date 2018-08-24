import React from 'react';
import styled from 'styled-components';

import ContactData from '../components/PageContact/ContactData';
import Delivery from '../components/PageContact/Delivery';
import Map from '../components/PageContact/Map';
import Locations from './../components/PageContact/Locations';
import { device } from '../utilities/device';

const Placeholder = styled.div`
  height: 200px;
`;

const Container = styled.div`
  display: grid;
  grid-template-rows: 18rem auto;
  grid-template-columns: 25% auto;
  grid-template-areas:
      "Contacto Mapa"
      "Domicilio Sucursales";
  grid-column-gap: 5rem;
  grid-row-gap: 2rem;
  box-sizing: border-box;
  padding: 3rem 4.5em;

  ${device.tablet} {
    grid-template-rows: 13em 40em auto ;
    grid-template-columns: 100%;
    grid-row-gap: 1em;
    grid-template-areas:
      "Contacto"
      "Mapa"
      "Sucursales";
  }
`;

const Contact = styled(ContactData)`
  grid-area: Contacto;
`;

const Del = styled(Delivery)`
  grid-area: Domicilio;
  ${device.tablet} {
    display: none;
  }
`;

const MapaCont = styled(Map)`
  grid-area: Mapa;
`;

const SucursalesContainer = styled(Locations)`
  grid-area: Sucursales;
`;


const PageContact = ({data}) => {
  const { matrixLocation } = data;
  const allLocationsData = data.allLocations.edges.map(({node: {frontmatter}}) => ({...frontmatter}));
  const locationCoords = allLocationsData.map(({coords}, index) => ({
    id: index,
    latitude: parseFloat(coords.latitude),
    longitude: parseFloat(coords.longitude)
  }));

  return (
    <div>
      <Placeholder />
      <Container>
        <Contact matrixLocation={matrixLocation}/>
        <Del />
        <MapaCont locations={locationCoords}/>
        <SucursalesContainer locations={allLocationsData}/>
      </Container>
    </div>
  );
}

export default PageContact;

export const pageQuery = graphql`
  query CoolQuery {
    matrixLocation: markdownRemark(frontmatter: {main: {eq: true}}) {
      frontmatter {
        title
        address
        phone
      }
    }
  
    allLocations: allMarkdownRemark(filter: 
      {frontmatter: {type: {eq: "sucursales"}}}
    ) {
      edges {
        node {
          frontmatter {
            title
            address
            phone
            coords {
              latitude
              longitude
            }
          }
        }
      }
    }
  }
`;