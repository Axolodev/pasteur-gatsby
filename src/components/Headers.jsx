import styled from 'styled-components';
import { globalTheme } from '../layouts/themes';

export const HeaderSizes = {
  h1: '2.2em',
  h2: '1.9em',
  h3: '1.5em',
  h4: '1.2em',
};

const withHeaderStyles = component => styled(component)`
  font-family: ${globalTheme.fontFamily.main};
  color: ${globalTheme.color.black};
`;


export const H1 = withHeaderStyles('h1').extend`
  font-size: ${HeaderSizes.h1};
  font-weight: 700;
`;

export const H3 = withHeaderStyles('h3').extend`
  font-size: ${HeaderSizes.h3};
  font-weight: 700;
`;