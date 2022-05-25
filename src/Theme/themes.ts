import { colors } from './colors';


export const lightTheme = {
    body: colors.bodyLight,
    text: colors.textLight,
    primary: colors.primaryLight,
    secondary: colors.secondaryLight,
    background: colors.backgroundLight,
    primaryHover: colors.primaryHoverLight,
    secondaryHover: colors.secondaryHoverLight,
}
export const darkTheme = {
    body: colors.bodyDark,
    text: colors.textDark,
    primary: colors.primaryDark,
    secondary: colors.secondaryDark,
    background: colors.backgroundDark,
    primaryHover: colors.primaryHoverDark,
    secondaryHover: colors.secondaryHoverDark,
}


export enum Themes {
    LIGHT= 'light',
    DARK = 'dark'
};
