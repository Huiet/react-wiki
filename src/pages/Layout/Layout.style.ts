import styled from 'styled-components';
import { NavLink} from "react-router-dom";
import { darkTheme, lightTheme, Themes } from '../../Theme';

export const NavigationLink = styled(NavLink)`
  &.active {
    font-weight: 600;
    border-bottom: 2px solid green;  
  }
`;

export const NavigationHeader = styled.nav`
  position: sticky;
  display: flex;
  gap: 1em;
  align-items: center;
  overflow: auto;
  
  & li a{
    text-decoration: none;
    color: ${props => props.theme.text};
    padding-top: 1em;
  }
`;


export const ThemeToggle = styled.button`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.text};
  justify-self: flex-end;
  `;
