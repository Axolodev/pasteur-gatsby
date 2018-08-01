import React from 'react';
import styled from 'styled-components';
import { List, AutoSizer } from 'react-virtualized';

import services from '../components/PageServices/assets/services.json';

const Layout = styled.div`
  padding: 13rem 6rem;
  font-family: ${props => props.theme.fontFamily.main};
  color: #333;
`;

const PageHeader = styled.h1`
  font-family: inherit;
  font-size: 2.2rem;
  font-weight: 700;
  padding-bottom: 1em;
`;

const TableLayout = styled.div`
  min-height: 500px;
  height: 60vh;
  border: #f0f0f0 solid 2px;
`;

const TableRow = styled.div.attrs({
  style: ({style}) => ({...style})  
})`
  background: ${({index}) => index % 2 === 0 ? 'white' : '#f0f0f0'};
  width: 100%;
  text-transform: lowercase;
  display: flex;
  align-items: center;
  padding-left: 0.5em;
  box-sizing: border-box;
  color: #333;
`;

const RowData = styled.div`
  ::first-letter {
    text-transform: capitalize;
  }
`;

const NameRowData = RowData.extend`
  flex: 2;
`;

const InstructionsRowData = RowData.extend`
  flex: 1;
`;

const DeliveryTimeRowData = RowData.extend`
  flex: 1;
`;

const HeaderRowData = TableRow.extend`
  font-weight: 700;
  padding: 0.5em;
`;

class Servicios extends React.Component {
  componentDidMount() {
    this.displayedServices = services;
  }

  rowRenderer = ({
    key,         // Unique key within array of rows
    index,       // Index of row within collection
    style        // Style object to be applied to row (to position it)
  }) => {
    return (
      <TableRow
        key={key}
        style={style}
        index={index}
      >
        <NameRowData>{services[index].name}</NameRowData>
        <InstructionsRowData>{services[index].instructions}</InstructionsRowData>
        <DeliveryTimeRowData>{services[index].deliveryTime}</DeliveryTimeRowData>
      </TableRow>
    )
  }
  
  render() {
    return (
      <Layout>
        <PageHeader>Nuestros Servicios</PageHeader>
        <TableLayout>
          <HeaderRowData>
            <NameRowData>Nombre de servicio</NameRowData>
            <InstructionsRowData>Instrucciones</InstructionsRowData>
            <DeliveryTimeRowData>Tiempo de entrega</DeliveryTimeRowData>
          </HeaderRowData>
          <AutoSizer>
            {({ height, width }) => (
              <List 
                width={width}
                height={height}
                rowCount={services.length}
                rowHeight={30}
                rowRenderer={this.rowRenderer}
              />
            )}
          </AutoSizer>
        </TableLayout>
      </Layout>
    )
  }
}

export default Servicios;