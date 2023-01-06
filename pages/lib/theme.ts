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
    color: ${(props) => props.theme.colors.dark};
    transition: all 0.50s linear;
      box-sizing: border-box;
  }
  :scroll {
    background: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.dark};
    transition: all 0.50s linear;
  
  }
  ::before,
  ::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    box-shadow: inset 0 0 5px ${(props) => props.theme.colors.yellow};
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(${(props) => props.theme.colors.gray}, ${(
  props
) => props.theme.colors.lightGray});
    border-radius: 8px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(${(props) => props.theme.colors.lightGray}, ${(
  props
) => props.theme.colors.yellow});
  }
`;

export default GlobalStyle;