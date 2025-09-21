import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/productpage";
import CategoryPage from "./pages/Catogarypage";
// import ProductDetailPage from "./pages/ProductDetailPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import InquiryPage from "./pages/inquiryPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:categoryId" element={<CategoryPage />} />        
        <Route path="/products/:id" element={<ProductPage />} />        
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/inquiry" element={<InquiryPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
