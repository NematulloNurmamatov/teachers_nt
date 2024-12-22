// import logo from './logo.svg';
// import './App.css';

import { Fragment } from "react";
import Footer from "./assets/components/Footer";
import Navbar from "./assets/components/Navbar";
import Teachers from "./assets/pages/Teachers";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </Fragment>
    
  );
}

export default App;
