import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import ContactData from '../components/PageContact/ContactData';
import Delivery from '../components/PageContact/Delivery';
import Map from '../components/PageContact/Map';
import Container from '../components/Layout';
import { device } from '../utilities/device';
import AppLayout from './../components/AppLayout/index';
import { H1 } from '../components/Headers';

const Layout = styled.div`
  display: flex;

  ${device.tablet} {
    flex-direction: column;
  }
`;

const MapaCont = styled(Map)`
  flex: 2;
  height: 25em;
  margin-bottom: 3em;
  margin-top: 1em;
`;

const LocationsContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-right: 2em;
  padding-top: 3em;
  box-sizing: border-box;
`;

const Sucursal = styled.div`
  margin-bottom: 2em;
`;

const SucursalName = styled.p`
  font-size: 1.2em;
  font-weight: 700;
  color: #333;
  font-family: ${({ theme }) => theme.fontFamily.main};
`;

const Direccion = styled.p`
  line-height: 1.2rem;
  font-size: 1em;
  color: #333;
  font-family: ${({ theme }) => theme.fontFamily.main};
`;

const NewLocations = ({ data }) => {
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
        <H1>Próximas aperturas</H1>
        <Layout>
          <LocationsContainer>
            {allLocationsData.map(location => (
              <Sucursal key={location.title}>
                <SucursalName> {location.title} </SucursalName>
                <Direccion> {location.address} </Direccion>
              </Sucursal>
            ))}
          </LocationsContainer>
          <MapaCont locations={locationCoords} />
        </Layout>
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
