import React, { useState, useEffect } from "react";
import "./pages/CSS/App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopHere from "./pages/ShopHere";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Profile from "./pages/Profile";
import Footer from "./components/Footer/Footer.jsx";
import LoadingPage from "./components/LoadingPage.jsx";
import men_banner from "./components/Assets/banner_mens.png";
import women_banner from "./components/Assets/banner_women.png";
import kid_banner from "./components/Assets/banner_kids.png";
import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Simulate loading time or wait for actual data loading here
    const timer = setTimeout(() => {
      setLoading(false);
      setFadeIn(true);
    }, 4000); // 4 seconds loading screen

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className={fadeIn ? "fade-in" : ""}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ShopHere />} />
          <Route
            path="/apple"
            element={<ShopCategory banner={men_banner} category="Apple" />}
          />
          <Route
            path="/samsung"
            element={<ShopCategory banner={women_banner} category="Samsung" />}
          />
          <Route
            path="/vivo"
            element={<ShopCategory banner={kid_banner} category="Vivo" />}
          />
          <Route path="/Product/:ProductId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
