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
  error: '#ff3b3b',
  background: '#FBFBFB'
}

const elevation = {
  depth0: 'none',
  depth1: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  depth2: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  depth3: '0px 8px 16px rgba(0, 0, 0, 0.1)',
  depth4: '0px 12px 24px rgba(0, 0, 0, 0.1)',
  depth5: '0px 16px 32px rgba(0, 0, 0, 0.1)',
  depth6: '0px 24px 48px rgba(0, 0, 0, 0.1)',
  depth7: '0px 32px 64px rgba(0, 0, 0, 0.1)',
  depth8:
    '0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)'
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
  color: fontColors[color],
  family: fontFamilies[family],
  lineHeight: '1.5',
  size: fontSizes[size],
  weight: 'normal'
})

// Define the default theme
export const defaultTheme: DefaultTheme = {
  breakpoints: breakpoints,
  colors: { ...primaryColors, ...secondaryColors, ...fontColors },
  fontColors: fontColors,
  elevation: elevation,
  font: getFontStyle('medium', 'default', 'body'),
  fontSizes: fontSizes,
  primaryColors: primaryColors,
  secondaryColors: secondaryColors
}

// Define the dark theme
export const darkTheme: Theme = {
  breakpoints: breakpoints,
  colors: { ...primaryColors, ...secondaryColors, ...fontColors },
  fontFamilies: fontFamilies,
  dark: {
    font: getFontStyle('medium', 'dark', 'body'),
    colors: { ...primaryColors, ...secondaryColors, ...fontColors },
    fontFamilies: fontFamilies,
    primaryColors: primaryColors,
    secondaryColors: secondaryColors,
    fontColors: fontColors,
    ...breakpoints
  },
  default: false,
  elevation: elevation,
  font: getFontStyle('medium', 'light', 'body'),
  fontSizes: fontSizes,
  primaryColors: primaryColors,
  secondaryColors: secondaryColors,
  fontColors: fontColors,
  light: false
}

// Define the light theme
export const lightTheme: Theme = {
  breakpoints: breakpoints,
  colors: { ...primaryColors, ...secondaryColors, ...fontColors },
  dark: false,
  default: false,
  elevation: elevation,
  font: getFontStyle('medium', 'dark', 'body'),
  fontSizes: fontSizes,
  fontFamilies: fontFamilies,
  primaryColors: primaryColors,
  secondaryColors: secondaryColors,
  fontColors: fontColors,
  light: {
    font: getFontStyle('medium', 'light', 'body'),
    colors: { ...primaryColors, ...secondaryColors, ...fontColors },
    fontFamilies: fontFamilies,
    primaryColors: primaryColors,
    secondaryColors: secondaryColors,
    fontColors: fontColors,
    ...breakpoints
  }
}

// Define the custom Theme type
export interface Theme extends DefaultTheme {
  breakpoints: typeof breakpoints
  colors: typeof primaryColors & typeof secondaryColors & typeof fontColors
  dark: DefaultTheme
  default: DefaultTheme
  elevation: typeof elevation
  font: ReturnType<typeof getFontStyle>
  fontSizes: typeof fontSizes
  light: DefaultTheme
  fontFamilies: DefaultTheme
  primaryColors: typeof primaryColors
  secondaryColors: typeof secondaryColors
  fontColors: typeof fontColors
}

// Define the final theme object
export const theme: Theme = {
  breakpoints: breakpoints,
  colors: { ...primaryColors, ...secondaryColors, ...fontColors },
  dark: darkTheme,
  default: defaultTheme,
  elevation: elevation,
  font: getFontStyle('medium', 'default', 'body'),
  fontSizes: fontSizes,
  light: lightTheme,
  fontFamilies: fontFamilies,
  primaryColors: primaryColors,
  secondaryColors: secondaryColors,
  fontColors: fontColors
}

// Define the ThemeType union type
export type ThemeType = 'default' | 'dark' | 'light'
