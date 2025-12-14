import { Navbar } from "./components/Home/Navbar.jsx";
import { Footer } from "./components/Home/Footer.jsx";
import { HomePage } from "./components/Home/HomePage.jsx";
import { Signup } from "./components/signup/Signup.jsx";
import { AboutPage } from "./components/about/AboutPage.jsx";
import { SupportPage } from "./components/support/SupportPage.jsx";
import { ProductPage } from "./components/products/ProductPage.jsx";
import { PricingPage } from "./components/pricing/PricingPage.jsx";
import { NotFound } from "./NotFound.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
