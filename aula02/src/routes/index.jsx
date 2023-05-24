import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Product from "../pages/product";
import NotFound from "../pages/notfound";

export default function RoutesConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}