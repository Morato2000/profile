import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../common/Header";
import Home from "../home/Home";
import About from "../pages/About.jsx";
import Services from "../home/Services";
import Portfilo from "./Portfolio.jsx";
import Testimonials from "./Testimonials.jsx";
import Blog from "./Blog.jsx";
import Contact from "./Contact.jsx";
import Footer from "../common/Footer.jsx";

function Pages() {
  return (
    <>
  <Header />
    <Routes>

  <Route exact path = '/' Component={Home} />
  <Route exact path = '/about' Component={About} />
  <Route exact path = '/services' Component={Services} />
  <Route exact path = '/portfolio' Component={Portfilo} />
  <Route exact path = '/testimonials' Component={Testimonials} />
  <Route exact path = '/blog' Component={Blog} />
  <Route exact path = '/contact' Component={Contact} />

  </Routes>
  <Footer />
</>
  );
}

export default Pages;
