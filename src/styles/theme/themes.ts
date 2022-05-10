const lightTheme = {
  white: '#fff',
  primary: '#5CEACA',
  text: '#CCD6F6',
  textSecondary: '#848EAA',
  background: '#0B192E',
  backgroundVariant: '#0e213d',
  border: 'rgba(241,233,231,0.15)',
  borderLight: 'rgba(241,233,231,0.05)',
};

const darkTheme: Theme = {
  white: '#fff',
  primary: '#5CEACA',
  text: '#CCD6F6',
  textSecondary: '#848EAA',
  background: '#0B192E',
  backgroundVariant: '#0e213d',
  border: 'rgba(241,233,231,0.15)',
  borderLight: 'rgba(241,233,231,0.05)',
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
