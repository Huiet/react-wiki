import styled from 'styled-components';
import { colors } from '../../Theme/colors';

// import type { Props } from './Button';
// const VARIANT_MAP = {
//   primaryLight: {
//     backgroundColor: colors.primaryLight,
//     borderColor: colors.primaryLight,
//     color: colors.white,
//     hoverBackgroundColor: colors.primaryHoverLight,
//     hoverBorderColor: colors.primaryHoverLight,
//   },
//   secondaryLight: {
//     backgroundColor: colors.secondaryLight,
//     borderColor: colors.secondaryLight,
//     color: colors.white,
//     hoverBackgroundColor: colors.secondaryHoverLight,
//     hoverBorderColor: colors.secondaryHoverLight,
//   },
//   deleteLight: {
//     backgroundColor: colors.darkRed,
//     borderColor: colors.darkRed,
//     color: colors.white,
//     hoverBackgroundColor: colors.darkRed,
//     hoverBorderColor: colors.white,
//   },
// } as const;

export const RootButton = styled.button`
  border-radius: 0.4rem;
  border-style: solid;
  border-width: 0.1rem;
  cursor: pointer;
  display: flex;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  padding: 0.5rem .8rem;
  &:active {
    box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.15);
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

export const PrimaryButton = styled(RootButton)`
  & ${(props) =>
          `
    background-color: ${props.theme.primary};
    border-color: ${props.theme.primary};
    color: ${colors.black};
    &:active:not([disabled]),
    &:hover:not([disabled]) {
      background-color: ${props.theme.primaryHover};
    }
  `}
`;

export const SecondaryButton = styled(RootButton)`
  ${(props) =>
    `
    background-color: ${colors.white};
    border-color: ${props.theme.primary};
    color: ${colors.black};
    &:active:not([disabled]),
    &:hover:not([disabled]) {
      background-color: ${props.theme.secondaryHover};
    }
  `}
`;
