import styled from 'styled-components';
import { NavLink} from "react-router-dom";
import { Button } from '../../components/Button/Button';

export const NavigationLink = styled(NavLink)`
  &.active {
    font-weight: 600;
    border-bottom: ${props => '2px solid ' + props.theme.primary };  
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



export const ThemeToggle = styled(Button)`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.text};
  margin: 1em 1em 0 auto;
  align-self: center;
  `;
// export const ThemeToggle = styled.button`
//   background-color: ${props => props.theme.primary};
//   color: ${props => props.theme.text};
//   margin: 1em 1em 0 auto;
//   align-self: center;
//   `;
