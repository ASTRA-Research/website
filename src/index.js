import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import OurWOrk from "./OurWork";
// import App from './App';
import Navbar from "./Navbar";
import OurWork from "./OurWork";
import Hero from "./Hero";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import Cursor from "./Cursor";
import OurTeam from "./OurTeam";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Cursor /> */}
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
    <Hero />
    <OurWork />
    <OurTeam />
    <ContactUs/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
