import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import ContactData from '../components/PageContact/ContactData';
import Delivery from '../components/PageContact/Delivery';
import Map from '../components/PageContact/Map';
import Locations from '../components/PageContact/Locations';
import _Layout from '../components/Layout';
import { device } from '../utilities/device';
import AppLayout from './../components/AppLayout/index';

const Container = _Layout.extend`
  display: flex;
  flex-direction: column;
`;

const Contact = styled(ContactData)`
  
`;

const Del = styled(Delivery)`
  
`;

const MapaCont = styled(Map)`
  
`;

const SucursalesContainer = styled(Locations)`
  
`;

const NewLocations = ({ data }) => {
  debugger;
  const allLocationsData = data.allNewLocations.edges.map(
    ({ node: { frontmatter } }) => ({ ...frontmatter })
  );

  const locationCoords = allLocationsData.map(({ coords }, index) => ({
    id: index,
    latitude: parseFloat(coords.latitude),
    longitude: parseFloat(coords.longitude),
  }));

  return (
    <AppLayout>
      <Container>
      </Container>
    </AppLayout>
  );
};

export default NewLocations;

export const pageQuery = graphql`
  query AllNewLocationsQuery {
    allNewLocations: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "aperturas" } } }
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
