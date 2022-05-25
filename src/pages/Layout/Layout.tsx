import React from "react";
import { Outlet} from "react-router-dom";
import './Layout.scss';
import {ReactComponent as ReactLogo }  from '../../assets/react-logo.svg'

import { NavigationLink, NavigationHeader, ThemeToggle } from './Layout.style';
import { URL_PATHS } from '../../common';
import { capitalize } from '../../common/Utilities';


function Layout({theme, toggleTheme}: any) {


  function onUpdateTheme() {
    console.log('functing')
    toggleTheme();
  }


    return (
        <>
            <NavigationHeader>
                <ReactLogo className="react-logo"/>
                <ul>
                    <li>
                        <NavigationLink to="/">
                            Home
                        </NavigationLink>
                    </li>
                    <li>
                        <NavigationLink to={URL_PATHS.ABOUT_ME}>
                            About Me
                        </NavigationLink>
                    </li>
                    <li>
                        <NavigationLink to={URL_PATHS.STYLED_COMPONENTS_PAGE}>
                          Styled Components
                        </NavigationLink>
                    </li>
                </ul>
              <ThemeToggle
                variant='primary'
                onClick={() => onUpdateTheme()}>
                {capitalize(theme)} Mode
              </ThemeToggle>
            </NavigationHeader>
            <hr />
            <Outlet />
        </>
    );
}

export default Layout;
