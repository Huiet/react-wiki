import styled from 'styled-components';
import { NavLink} from "react-router-dom";

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
    color: black;
    padding-top: 1em;
  }
`;
