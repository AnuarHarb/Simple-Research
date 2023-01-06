import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Navbar } from "./components/layout/navbar";
import { Sidebar } from "./components/layout/sidebar";
import { Footer } from "./components/layout/footer";

// pages
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Blog } from "./pages/blog";
import { Faq } from "./pages/faq";
import { Contact } from "./pages/contact";
import { Calculator } from "./pages/calculator";
import { Services } from "./pages/services";
import { Calendry } from "./pages/calendry";
import { BlogPage } from "./pages/blog/blogPage";

import { ScrollToTop } from "./utilities/scrollToTop";

 import ReactGA from 'react-ga';
const TRACKING_ID = "UA-214269330-1";
ReactGA.initialize(TRACKING_ID);

function App() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

   useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  

  return (
    <>
      <Navbar setSidebarOpen={setSidebarOpen}></Navbar>
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      ></Sidebar>
      <Container className="mb-5">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog">
            <Route index element={<Blog />} />
            <Route path=":postId" element={<BlogPage />} />
          </Route>
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/services" element={<Services />} />
          <Route path="/calendry" element={<Calendry />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
