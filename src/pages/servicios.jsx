import React from 'react';
import styled from 'styled-components';
import { List, AutoSizer } from 'react-virtualized';

import services from '../components/PageServices/assets/services.json';
import _Layout from '../components/Layout';
import { H1 } from '../components/Headers';
import AppLayout from '../components/AppLayout';

const Layout = _Layout.extend`
  font-family: ${props => props.theme.fontFamily.main};
  color: #333;
`;

const PageHeader = H1.extend`
  padding-bottom: 1rem;
`;

const TableLayout = styled.div`
  min-height: 500px;
  border: #f0f0f0 solid 2px;
`;

const TableRow = styled.div.attrs({
  style: ({ style }) => ({ ...style }),
})`
  background: ${({ index }) => (index % 2 === 0 ? 'white' : '#e7e7e7')};
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

const FilterInput = styled.input`
  width: 100%;
  border-radius: 0.2em;
  border: 1px solid #777;
  box-sizing: border-box;
  padding: 0.5em;
  margin-bottom: 1em;
`;

class Servicios extends React.Component {
  state = {
    displayedServices: services,
  };

  rowRenderer = ({
    key, // Unique key within array of rows
    index, // Index of row within collection
    style, // Style object to be applied to row (to position it)
  }) => {
    return (
      <TableRow key={key} style={style} index={index}>
        <NameRowData>{this.state.displayedServices[index].name}</NameRowData>
        <InstructionsRowData>
          {this.state.displayedServices[index].instructions}
        </InstructionsRowData>
        <DeliveryTimeRowData>
          {this.state.displayedServices[index].deliveryTime}
        </DeliveryTimeRowData>
      </TableRow>
    );
  };

  handleInput = ({ target }) => {
    const { value } = target;

    this.setState(() => {
      const filteredServices = services.filter(
        service =>
          service.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
      );

      return {
        displayedServices: filteredServices,
      };
    });
  };

  render() {
    return (
      <AppLayout>
        <Layout>
          <PageHeader>Nuestros Servicios</PageHeader>
          <FilterInput
            type="text"
            placeholder="Filtrar servicios"
            onChange={this.handleInput}
            name="filterInput"
          />
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
                  rowCount={this.state.displayedServices.length}
                  rowHeight={30}
                  rowRenderer={this.rowRenderer}
                />
              )}
            </AutoSizer>
          </TableLayout>
        </Layout>
      </AppLayout>
    );
  }
}

export default Servicios;
