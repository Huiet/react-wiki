import React from "react";
import { NavLink, Outlet} from "react-router-dom";
import './Layout.scss';
import {ReactComponent as ReactLogo }  from '../../assets/react-logo.svg'

import { NavigationLink, NavigationHeader } from './Layout.style';

function Layout(props: any) {
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
                        <NavigationLink to="/about-me">
                            About Me
                        </NavigationLink>
                    </li>
                </ul>
            </NavigationHeader>
            <hr />
            <Outlet />
        </>
    );
}

export default Layout;
