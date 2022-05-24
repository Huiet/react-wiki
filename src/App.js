import * as React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout/Layout.tsx";
// import AboutMe from "./pages/AboutMe";
const AboutMe = React.lazy(() => import('./pages/AboutMe/about-me'));
// const AboutMe = React.lazy(() => import('./pages/AboutMe/about-me')); // todo: ask why this doesn't work with index files????


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<Home />} />
              <Route path="about-me" element={
                  <React.Suspense fallBack={<>...</>}>
                      <AboutMe />
                  </React.Suspense>
              } />
          </Route>
        </Routes>
      </BrowserRouter>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
