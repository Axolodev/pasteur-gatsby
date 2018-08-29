import styled from 'styled-components';
import { globalTheme } from '../layouts/themes';

const withHeaderStyles = component => styled(component)`
  font-family: ${globalTheme.fontFamily.main};
  color: ${globalTheme.color.black};
`;

export const H1 = withHeaderStyles('h1').extend`
  font-size: 2.2rem;
  font-weight: 700;
`;

export const H3 = withHeaderStyles('h3').extend`
  font-size: 2rem;
  font-weight: 700;
`;