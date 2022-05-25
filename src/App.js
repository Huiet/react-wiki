import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout/Layout.tsx";
import {URL_PATHS} from "./common";
import StyledComponentsPage from "./pages/StyledComponentsPage/styled-components-page";
// import AboutMe from "./pages/AboutMe";

// const AboutMe = React.lazy(() => import('./pages/AboutMe/about-me')); // todo: ask why this doesn't work with index files????

import {ThemeProvider} from "styled-components";
import {GlobalStyles, Themes} from './Theme';
import {lightTheme, darkTheme} from "./Theme";

const AboutMe = React.lazy(() => import('./pages/AboutMe/about-me'));
function App() {

    const [theme, setTheme] = useState(Themes.LIGHT);
    const toggleTheme = () => {
        theme === Themes.LIGHT ? setTheme(Themes.DARK) : setTheme(Themes.LIGHT)
    }

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout theme={theme} toggleTheme={toggleTheme}/>}>
                            <Route index element={<Home/>}/>
                            <Route path={URL_PATHS.ABOUT_ME} element={
                                <React.Suspense fallBack={<>...</>}>
                                    <AboutMe/>
                                </React.Suspense>
                            }/>
                            <Route path={URL_PATHS.STYLED_COMPONENTS_PAGE}
                                   element={
                                       <React.Suspense fallBack={<>...</>}>
                                           <StyledComponentsPage/>
                                       </React.Suspense>
                                   }
                            ></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
