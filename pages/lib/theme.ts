import {
  GlobalStyleComponent,
  DefaultTheme,
  createGlobalStyle,
} from 'styled-components';

import 'styled-components'

interface Color {
  yellow: string;
  dark: string;
  light: string;
  gray: string;
  lightGray: string;
}

export type Theme = {
  colors: Color;
  body: string;
  borderRadius: string;
};

export const lightTheme: Theme = {
  colors: {
    yellow: '#d9662f',
    dark: '#1a191b',
    light: '#e5e2e0',
    gray: '#5f6160',
    lightGray: '#95a09f',
  },
  body: '#fff',
  borderRadius: '5px',
};
export const darkTheme: Theme = {
  colors: {
    yellow: '#d9662f',
    dark: '#1a191b',
    light: '#e5e2e0',
    gray: '#5f6160',
    lightGray: '#95a09f',
  },
  body: '#000',
  borderRadius: '5px',
};


 const GlobalStyle: GlobalStyleComponent<
  {},
  DefaultTheme
> = createGlobalStyle`
  html {
    font-family: 'Inter', sans-serif;
  }
  body {
    background-color: ${(props) => props.theme.body};
  }
`;

export default GlobalStyle;