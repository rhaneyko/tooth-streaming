import 'styled-components';

declare module 'styled-components' {
export interface DefaultTheme{
      title: string;
        colors: {
          title: string,
          text: string,
          background: string,
          navBackground: string,
          button: string,
          buttonText: string,
          borderButton: string,
          cardBackground: string,
        }
  }
}
