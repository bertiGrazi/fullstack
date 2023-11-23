// d = definição de tipo de ts
//arquivo de definição de tipos 

import 'styled-components';
import { defaultTheme } from '../styles/theme/default';

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  //Sobreescrever tipagem de uma biblioteca existente
  export interface DefaultTheme extends ThemeType {}
}