const lightTheme = {
  primary: '#5CEACA',
  text: '#CCD6F6',
  textSecondary: '#848EAA',
  background: '#0B192E',
  backgroundVariant: 'rgba(28,26,26,1)',
  border: 'rgba(241,233,231,0.15)',
  borderLight: 'rgba(241,233,231,0.05)',
};

const darkTheme: Theme = {
  primary: '#5CEACA',
  text: '#CCD6F6',
  textSecondary: '#848EAA',
  background: '#0B192E',
  backgroundVariant: 'rgba(28,26,26,1)',
  border: 'rgba(241,233,231,0.15)',
  borderLight: 'rgba(241,233,231,0.05)',
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
