import type { DefaultTheme } from 'styled-components'

// Define primary and secondary colors for the themes
const primaryColors = {
  light: '#1f4782',
  dark: '#2B4877'
}

const secondaryColors = {
  light: '#C7C7C7',
  dark: '#c06000'
}

// Define default font sizes and colors
const fontSizes = {
  extraSmall: '11px',
  small: '13px',
  medium: '15px',
  large: '18px',
  extraLarge: '22px'
}

const fontFamilies = {
  body: 'Noto Sans KR, sans-serif',
  roboto: 'Roboto, sans-serif',
  monospace: 'Inconsolata, monospace'
}

const fontColors = {
  default: '#4D4C4C',
  primary: '#1f4782',
  secondary: '#2B4877',
  light: '#fff',
  dark: '#000',
  error: '#ff3b3b'
}

// Define custom breakpoints
const breakpoints = {
  phone: '320px',
  tabletPortrait: '600px',
  tabletLandscape: '900px',
  desktop: '1200px',
  desktopLarge: '1800px'
}

const getFontStyle = (
  size: keyof typeof fontSizes,
  color: keyof typeof fontColors,
  family: keyof typeof fontFamilies
) => ({
  size: fontSizes[size],
  color: fontColors[color],
  weight: 'normal',
  family: fontFamilies[family],
  lineHeight: '1.5'
})

// Define the default theme
export const defaultTheme: DefaultTheme = {
  font: getFontStyle('medium', 'default', 'body'),
  colors: { ...primaryColors, ...secondaryColors, ...fontColors },
  fontSizes: fontSizes,
  breakpoints: breakpoints
}

// Define the dark theme
export const darkTheme: Theme = {
  font: getFontStyle('medium', 'light', 'body'),
  colors: { ...primaryColors, ...secondaryColors, ...fontColors },
  fontSizes: fontSizes,
  breakpoints: breakpoints,
  dark: {
    font: getFontStyle('medium', 'dark', 'body'),
    colors: { ...primaryColors, ...secondaryColors, ...fontColors },
    ...breakpoints
  },
  light: false,
  default: false
}

// Define the light theme
export const lightTheme: Theme = {
  font: getFontStyle('medium', 'dark', 'body'),
  colors: { ...primaryColors, ...secondaryColors, ...fontColors },
  fontSizes: fontSizes,
  breakpoints: breakpoints,
  light: {
    font: getFontStyle('medium', 'light', 'body'),
    colors: { ...primaryColors, ...secondaryColors, ...fontColors },
    ...breakpoints
  },
  dark: false,
  default: false
}

// Define the custom Theme type
export interface Theme extends DefaultTheme {
  font: ReturnType<typeof getFontStyle>
  colors: typeof primaryColors & typeof secondaryColors & typeof fontColors
  fontSizes: typeof fontSizes
  breakpoints: typeof breakpoints
  dark: DefaultTheme
  light: DefaultTheme
  default: DefaultTheme
}

// Define the final theme object
export const theme: Theme = {
  font: getFontStyle('medium', 'default', 'body'),
  colors: { ...primaryColors, ...secondaryColors, ...fontColors },
  fontSizes: fontSizes,
  breakpoints: breakpoints,
  dark: darkTheme,
  light: lightTheme,
  default: defaultTheme
}

// Define the ThemeType union type
export type ThemeType = 'default' | 'dark' | 'light'
