import styled from 'styled-components';
import { device } from '../utilities/device';

export const withLayoutPadding = component => styled(component)`
  padding: 0 3rem;

  ${device.tablet} {
    padding: 0 1.5em;
  }

  ${device.mobile} {
    padding: 0 0.5em;
  }
`;

const Layout = withLayoutPadding('main').extend`
  padding: 13rem ${({fluid}) => fluid ? 0 : '3rem'};
  padding-bottom: 4em;
  display: flex;
  flex-direction: column;
  
  ${device.tablet} {
    padding-top: 8em;
    padding-bottom: 4em;
  }

  ${device.mobile} {
    padding-bottom: 4em;
  }
`;

export default Layout;